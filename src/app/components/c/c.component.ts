import { Component, ViewEncapsulation, computed, inject } from '@angular/core';
import { ABCStore } from '../../stores/abc.store';
import { toObservable } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [],
  providers: [ABCStore],
  template: `
    <h4>C Component</h4>
    <input type="text" #cText> <button (click)="cSend(cText.value)">C Send</button><br>
    <span style="font-size:12px;" class="c">
      a ) {{abcStore.a()}} <br>
      b ) {{abcStore.b()}}
    </span>
    `
})
export class CComponent {
  readonly abcStore = inject(ABCStore);

  constructor() {
    const merged = merge(toObservable(this.abcStore.a), toObservable(this.abcStore.b));
    merged.subscribe(value => $(".c").fadeOut().fadeIn());
  }

  cSend(value: string) {
    this.abcStore.cText(value);
  }
}
