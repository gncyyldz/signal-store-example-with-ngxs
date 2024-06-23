import { Injectable } from "@angular/core";
import { ABCStateModel } from "../state-models/abc.state.module";
import { Action, State, StateContext } from "@ngxs/store";
import { AText, BText, CText } from "../actions/abc.action";

@State<ABCStateModel>({
    name: 'abc',
    defaults: {
        a: '',
        b: '',
        c: ''
    }
})
@Injectable()
export class ABCState {
    @Action(AText)
    aText(ctx: StateContext<ABCStateModel>, value: AText) {
        const state = ctx.getState();
        ctx.setState({ a: value.text, b: state.b, c: state.c })
    }

    @Action(BText)
    bText(ctx: StateContext<ABCStateModel>, value: BText) {
        const state = ctx.getState();
        ctx.setState({ a: state.a, b: value.text, c: state.c })
    }

    @Action(CText)
    cText(ctx: StateContext<ABCStateModel>, value: CText) {
        const state = ctx.getState();
        ctx.setState({ a: state.a, b: state.b, c: value.text })
    }
}