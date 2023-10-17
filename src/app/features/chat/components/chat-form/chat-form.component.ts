import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { TypingLoaderComponent } from 'src/app/shared/components/typing-loader/typing-loader.component';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    TypingLoaderComponent
  ],
  standalone: true,
})
export class ChatFormComponent {

  @Input({ required: true }) public form: FormGroup;
  @Input({ required: true }) public response: any;
  @Input({ required: true }) public loading: boolean;

  @Output() onSubmit = new EventEmitter();

}
