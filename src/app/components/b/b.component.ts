import { Component, inject } from '@angular/core';
import { CComponent } from '../c/c.component';
import { ABCStore } from '../../stores/abc.store';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CComponent],
  providers: [ABCStore],
  template: `
    <h4>B Component</h4>
    <input type="text" #bText> <button (click)="bSend(bText.value)">B Send</button><br>
    <span style="font-size:12px;">
      a ) {{abcStore.a()}} <br>
      c ) {{abcStore.c()}}
    </span>
    <app-c></app-c>
    `
})
export class BComponent {
  readonly abcStore = inject(ABCStore);

  bSend(value: string) {
    this.abcStore.bText(value);
  }
}
