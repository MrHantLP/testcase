import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { KeyValueComponent } from '../key-value/key-value.component';

@Component({
  selector: 'app-key-value-editable',
  standalone: true,
  imports: [ButtonComponent, KeyValueComponent],
  templateUrl: './key-value-editable.component.html',
  styleUrl: './key-value-editable.component.css',
})
export class KeyValueEditableComponent {
  @Input() key = 'Title';
  @Input() value = 'Value';
  @Input() suffix = '';
  @Output() editClick = new EventEmitter<void>();
  @Input() prefix = '';
}
