import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-value',
  standalone: true,
  imports: [],
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.css',
})
export class KeyValueComponent {
  @Input() key = 'Title';
  @Input() value = 'Value';
  @Input() suffix = '';
  @Input() prefix = '';
}
