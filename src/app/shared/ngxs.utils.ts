import { ActionMap, SelectorMap, createDispatchMap, createSelectMap } from "@ngxs/store";
import { signalStoreFeature, withComputed, withMethods } from "@ngrx/signals";

export function withSelectors<T extends SelectorMap>(selectorMap: T) {
    return signalStoreFeature(withComputed(() => createSelectMap(selectorMap)))
}

export function withActions<T extends ActionMap>(actionMap: T) {
    return signalStoreFeature(withMethods(() => createDispatchMap(actionMap)))
}