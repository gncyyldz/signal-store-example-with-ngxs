import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  template: `
    <app-counter></app-counter>
  `
})
export class AppComponent {
  title = 'signal-store-example-with-ngxs';
}
