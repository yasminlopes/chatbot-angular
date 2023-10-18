import { FormControl } from '@angular/forms';

export interface BardAiResponse {
  bard: BardAi;
}

export interface BardAiRequest {
  question: string;
}

export interface BardAi {
  question: string;
  answer: string;
  conversation_id: string;
}

export interface ChatFormProps {
  question: FormControl<string>;
  answer: FormControl<string>;
}