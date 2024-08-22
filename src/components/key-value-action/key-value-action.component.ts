import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KeyValueComponent } from '../key-value/key-value.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-key-value-action',
  standalone: true,
  imports: [KeyValueComponent, ButtonComponent],
  templateUrl: './key-value-action.component.html',
  styleUrl: './key-value-action.component.css',
})
export class KeyValueActionComponent {
  @Input() key = 'Title';
  @Input() value = 'Value';
  @Input() suffix = '';
  @Input() actionName = '';
  @Output() actionClick = new EventEmitter<void>();
  @Input() prefix = '';
}
