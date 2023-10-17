import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ChatFormComponent } from '../../components/chat-form/chat-form.component';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { tap } from 'rxjs';
import { ChatFormProps } from '../../models/chat.model';
import { ChatHeaderComponent } from '../../components/chat-header/chat-header.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ChatFormComponent, ChatHeaderComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chatForm: FormGroup<ChatFormProps>;

  private _formBuilder = inject(NonNullableFormBuilder);
  private _apiService = inject(ApiService);

  public loading = signal(false);

  ngOnInit(): void {
      this.buildForm()
  }

  private buildForm(): void {
    this.chatForm = this._formBuilder.group({
      pergunta: ['', [Validators.required, Validators.minLength(5)]],
      content: [''],
    })
  }

  public getQuestion$ = computed(() => this.chatForm.get('pergunta')?.value)
  public chatBotResponse$ = computed(() => this.chatForm.controls.content.value)

  public sendMessage() {
    this.loading.set(true)
    const pergunta = this.getQuestion$()
    console.log(pergunta)
    this._apiService
      .getBardAiResponse(pergunta)
      .pipe(
        tap(() => {
          this.loading.set(false)
        })
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.chatForm.controls.content.setValue(response.resposta.content);
          this.clearQuestionField()
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public fillSuggestion(suggestion: string) {
    this.chatForm.controls.pergunta.setValue(suggestion);
  }

  public clearQuestionField() {
    this.chatForm.controls.pergunta.setValue('');
  }



}
