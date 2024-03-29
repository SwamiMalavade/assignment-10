import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CompFailureDirective } from './comp-failure.directive';
import { CompSuccessDirective } from './comp-success.directive';
import { CustomStyleDirective } from './custom-style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CompFailureDirective,
    CompSuccessDirective,
    CustomStyleDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assigment-10';
}
