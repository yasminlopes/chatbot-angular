import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-chat-suggestions',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './chat-suggestions.component.html',
  styleUrls: ['./chat-suggestions.component.scss']
})
export class ChatSuggestionsComponent {

  @Output() onFillSuggestion = new EventEmitter();

  public fillSuggestion(suggestion: string) {
    this.onFillSuggestion.emit(suggestion);
  }


}
