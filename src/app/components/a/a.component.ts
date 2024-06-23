import { Component, inject } from '@angular/core';
import { BComponent } from '../b/b.component';
import { ABCStore } from '../../stores/abc.store';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent],
  providers: [ABCStore],
  template: `
    <h4>A Component</h4>
    <input type="text" #aText> <button (click)="aSend(aText.value)">A Send</button> <br>
    <span style="font-size:12px;">
      b ) {{abcStore.b()}} <br>
      c ) {{abcStore.c()}}
    </span>
    <app-b></app-b>
  `
})
export class AComponent {
  readonly abcStore = inject(ABCStore);

  aSend(value: string) {
    this.abcStore.aText(value);
  }
}
