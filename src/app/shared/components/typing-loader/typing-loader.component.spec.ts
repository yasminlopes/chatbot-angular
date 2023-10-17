import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingLoaderComponent } from './typing-loader.component';

describe('TypingLoaderComponent', () => {
  let component: TypingLoaderComponent;
  let fixture: ComponentFixture<TypingLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TypingLoaderComponent]
    });
    fixture = TestBed.createComponent(TypingLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
