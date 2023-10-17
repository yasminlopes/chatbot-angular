import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing-loader.component.html',
  styleUrls: ['./typing-loader.component.scss'],
})

export class TypingLoaderComponent {

  @Input() loading: boolean;

}
