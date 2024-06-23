import { signalStore } from "@ngrx/signals";
import { withActions, withSelectors } from "../shared/ngxs.utils";
import { ABCSelector } from "../selectors/abc.selector";
import { AText, BText, CText } from "../actions/abc.action";

export const ABCStore = signalStore(
    withSelectors({
        a: ABCSelector.getA,
        b: ABCSelector.getB,
        c: ABCSelector.getC
    }),
    withActions({
        aText: AText,
        bText: BText,
        cText: CText
    })
);