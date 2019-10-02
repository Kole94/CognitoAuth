const initalState = {
    a: 0
}
const reducerNumber = (state = initalState, action) => {
    switch (action.type) {
        case 'CLICK':
            return {
                ...state,
                a: action.payload,
            }

        default:
            return {
                ...state
            }
    }
}

export default reducerNumber;