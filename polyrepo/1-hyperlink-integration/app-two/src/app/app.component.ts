import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="container">
    <h1>Microfrontend two</h1>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'app-one';
}
