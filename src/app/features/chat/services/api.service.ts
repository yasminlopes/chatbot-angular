import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BardAiRequest, BardAiResponse } from '../models/chat.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  protected baseUrl = environment.BARD_API_URL;

  constructor(private http: HttpClient) {}

  public getBardAiResponse(question: any): Observable<BardAiResponse> {
    return this.http.post<BardAiResponse>(`${this.baseUrl}/`, { question });
  }
}
