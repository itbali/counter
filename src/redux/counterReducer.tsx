export enum Action {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    SET_COUNTER,
    SET_MAX_VALUE,
    SET_MIN_VALUE,
}

export type ActionType =
    ReturnType<typeof decreaseCounter> |
    ReturnType<typeof increaseCounter> |
    ReturnType<typeof setCounter>|
    ReturnType<typeof setMax> |
    ReturnType<typeof setMin>

export type stateType = {
    counter: number
    maxValue: number
    minValue: number
}

let initialState: stateType = {
    counter: 0,
    maxValue: 5,
    minValue: 0,
}

export const counterReducer = (state: stateType = initialState, action: ActionType): stateType => {
    switch (action.type) {
        case Action.INCREASE_COUNTER:
            return {...state, counter: state.counter + 1}
        case Action.DECREASE_COUNTER:
            return {...state, counter: state.counter - 1}
        case Action.SET_COUNTER:
            return {...state, counter: action.num}
        case Action.SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        case Action.SET_MIN_VALUE:
            return {...state, minValue: action.minValue}
        default:
            return state
    }

}

export const increaseCounter = () => {
    return {type: Action.INCREASE_COUNTER} as const
}
export const decreaseCounter = () => {
    return {type: Action.DECREASE_COUNTER} as const
}
export const setCounter = (num: number) => {
    return {type: Action.SET_COUNTER, num} as const
}
export const setMax = (maxValue: number) => {
    return {type: Action.SET_MAX_VALUE, maxValue} as const
}
export const setMin = (minValue: number) => {
    return {type: Action.SET_MIN_VALUE, minValue} as const
}
