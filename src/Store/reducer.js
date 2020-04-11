const initialState = {
    value: 0,
}

const counterReducer = (state = initialState.value, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }

}
export default counterReducer;