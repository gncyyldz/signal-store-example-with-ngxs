import { Action, Selector, State, StateContext } from "@ngxs/store";
import { CounterStateModel } from "../state-models/counter.state.model";
import { Decrement, Increment } from "../actions/counter.actions";
import { Injectable } from "@angular/core";

@State<CounterStateModel>({
    name: 'counter',
    defaults: {
        count: 0
    }
})
@Injectable()
export class CounterState {
    @Action(Increment)
    increment(ctx: StateContext<CounterStateModel>) {
        const state = ctx.getState();
        ctx.setState({ count: ++state.count })
    }

    @Action(Decrement)
    decrement(ctx: StateContext<CounterStateModel>) {
        const state = ctx.getState();
        ctx.setState({ count: --state.count });
    }
}