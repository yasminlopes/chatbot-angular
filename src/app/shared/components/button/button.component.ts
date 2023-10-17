import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public text: string;
  @Input() public textVisible: boolean = true;
  @Input() public disabled: boolean
  @Input({ required: true }) public icon: string;
  @Output() public onClick = new EventEmitter();
}
