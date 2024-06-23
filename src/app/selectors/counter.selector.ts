import { Selector } from "@ngxs/store";
import { CounterState } from "../states/counter.state";
import { CounterStateModel } from "../state-models/counter.state.model";

export class CounterSelector {
    @Selector([CounterState])
    static getCount(state: CounterStateModel) {
        return state.count;
    }
}