import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BardAiRequest, BardAiResponse } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  protected baseUrl = 'http://localhost:8000/bard-api/';

  constructor(private http: HttpClient) {}

  public getBardAiResponse(pergunta: any): Observable<BardAiResponse> {
    return this.http.post<BardAiResponse>(`${this.baseUrl}`, { pergunta });
  }
}
