import { signalStore } from "@ngrx/signals";
import { withActions, withSelectors } from "../shared/ngxs.utils";
import { CounterSelector } from "../selectors/counter.selector";
import { Decrement, Increment } from "../actions/counter.actions";
import { Injectable } from "@angular/core";

export const CounterStore = signalStore(
    withSelectors({
        counter: CounterSelector.getCount
    }),
    withActions({
        increment: Increment,
        decrement: Decrement
    })
);