import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { ContainerComponent } from '../components/container/container.component';
import { CardComponent } from '../components/card/card.component';
import { ButtonComponent } from '../components/button/button.component';
import { RetirementComponent } from '../pages/retirement/retirement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    ContainerComponent,
    CardComponent,
    ButtonComponent,
    RetirementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'testcase';

  ngOnInit(): void {
    initFlowbite();
  }
}
