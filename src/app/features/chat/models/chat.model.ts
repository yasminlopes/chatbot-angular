import { FormControl } from '@angular/forms';

export interface BardAiResponse {
  resposta: BardAi;
}

export interface BardAiRequest {
  pergunta: string;
}

export interface BardAi {
  pergunta: string;
  content: string;
  conversation_id: string;
}

export interface ChatFormProps {
  pergunta: FormControl<string | null>;
  content: FormControl<string | null>;
}