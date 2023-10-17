import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSuggestionsComponent } from './chat-suggestions.component';

describe('ChatSuggestionsComponent', () => {
  let component: ChatSuggestionsComponent;
  let fixture: ComponentFixture<ChatSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatSuggestionsComponent]
    });
    fixture = TestBed.createComponent(ChatSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
