import { Component, inject } from '@angular/core';
import { Decrement, Increment } from '../../actions/counter.actions';
import { CounterSelector } from '../../selectors/counter.selector';
import { CounterStore } from '../../stores/counter.store';
import { AComponent } from '../a/a.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AComponent],
  providers: [CounterStore],
  template: `
    <h3>NGXS Counter Example</h3>
    <!-- <h2>{{count$() }}</h2> -->
     <h2>{{counterStore.counter()}}</h2>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>

    <hr>
    <app-a></app-a>
  `
})
export class CounterComponent {
  readonly counterStore = inject(CounterStore);

  increment() {
    this.counterStore.increment();
  }

  decrement() {
    this.counterStore.decrement();
  }


  //#region NGXS State Management

  // count$ = this.store.selectSignal(CounterSelector.getCount);

  // constructor(private store: Store) {
  //   store.select(CounterSelector.getCount).subscribe(d => console.log(d));
  // }

  // increment() {
  //   this.store.dispatch(new Increment())
  //   this.counterStore
  // }

  // decrement() {
  //   this.store.dispatch(new Decrement());
  // }

  //#endregion
}
