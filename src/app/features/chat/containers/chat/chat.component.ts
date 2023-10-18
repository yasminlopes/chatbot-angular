import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { catchError, finalize, of, switchMap, tap } from 'rxjs';
import { ChatFormComponent } from '../../components/chat-form/chat-form.component';
import { ChatHeaderComponent } from '../../components/chat-header/chat-header.component';
import { BardAiResponse, ChatFormProps } from '../../models/chat.model';
import { ApiService } from '../../services/api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as MarkdownIt from 'markdown-it';
import { CHAT_SUGGESTIONS } from '../../models/chat-suggestions.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ChatFormComponent, ChatHeaderComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chatForm: FormGroup<ChatFormProps>;
  public suggestions = CHAT_SUGGESTIONS;

  private _formBuilder = inject(NonNullableFormBuilder);
  private _apiService = inject(ApiService);
  private _destroyRef = inject(DestroyRef);

  constructor() {}

  public loading = signal(false);

  ngOnInit(): void {
    this.buildForm();
  }

  public get question() {
    return this.chatForm.controls.question.value;
  }

  private buildForm(): void {
    this.chatForm = this._formBuilder.group({
      question: ['', [Validators.required, Validators.minLength(5)]],
      answer: [''],
    });
  }

  public sendMessage(): void {
    this.loading.set(true);

    this._apiService
      .getBardAiResponse(this.question)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        switchMap((response: BardAiResponse) => {
          const md = new MarkdownIt();
          const markdownContent = md.render(
            response.bard.answer.toString()
          );
          return of(markdownContent);
        }),
        catchError(() => {
          return of('Oops... Estamos enfrentando um probleminha para conectar com o servidor. Por favor, tente novamente mais tarde.');
        }),
        finalize(() => {
          this.loading.set(false);
        })
      )
      .subscribe(
        (markdownContent: string) => {
          this.chatForm.controls.answer.setValue(markdownContent);
          this.chatForm.controls.question.setValue('');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public fillSuggestion(suggestion: string) {
    this.chatForm.controls.question.setValue(suggestion);
  }

  public clearQuestionField() {
    this.chatForm.controls.question.reset('');
  }
}
