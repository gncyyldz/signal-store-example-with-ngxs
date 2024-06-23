import { Selector } from "@ngxs/store";
import { ABCState } from "../states/abc.state";
import { ABCStateModel } from "../state-models/abc.state.module";

export class ABCSelector {
    @Selector([ABCState])
    static getA(state: ABCStateModel) {
        return state.a;
    }

    @Selector([ABCState])
    static getB(state: ABCStateModel) {
        return state.b;
    }

    @Selector([ABCState])
    static getC(state: ABCStateModel) {
        return state.c;
    }
}