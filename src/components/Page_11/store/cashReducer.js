const defaultState = {
    cash: 10
}

// action = {type: '', payload: ''}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return { ...state, cash: state.cash + action.payload }
        case 'GET_CASH':
            return { ...state, cash: state.cash - action.payload }
        case 'GET_CLEAR':
            return { ...state, cash: state.cash = 0 }
        default:
            return state
    }
}

