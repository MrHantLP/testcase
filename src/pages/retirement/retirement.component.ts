import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { Store } from '@ngrx/store';
import { RetirementActions } from '../../store/retirement.actions';
import {
  isRetirementLoading,
  selectRetirementData,
} from '../../store/retirement.selectors';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { KeyValueComponent } from '../../components/key-value/key-value.component';
import { KeyValueActionComponent } from '../../components/key-value-action/key-value-action.component';
import { KeyValueEditableComponent } from '../../components/key-value-editable/key-value-editable.component';

@Component({
  selector: 'app-retirement',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    JsonPipe,
    AsyncPipe,
    NgIf,
    SpinnerComponent,
    KeyValueComponent,
    KeyValueActionComponent,
    KeyValueEditableComponent,
  ],
  templateUrl: './retirement.component.html',
  styleUrl: './retirement.component.css',
})
export class RetirementComponent implements OnInit {
  private readonly store: Store = inject(Store);
  protected readonly isLoading$ = this.store.select(isRetirementLoading);
  protected readonly currency = 'TWD';
  // protected readonly retirementForm: FormGroup;
  protected readonly retirement$ = this.store.select(selectRetirementData);

  public ngOnInit(): void {
    this.store.dispatch(RetirementActions.loadRetirements());
  }

  editAccountNumber() {
    console.log('edit');
  }
}
