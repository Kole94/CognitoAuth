


const initalState = {
    input: '',
    list: [],
    movie: false,
    loading: false
}

const reducerText = (state = initalState, action) => {


    switch (action.type) {

        case 'A':
            console.log(state.movie)

            return{
                ...state
            }
        case 'LOADING':
            console.log(state.movie)

            return{
                ...state,
                loading: true
            }

        case 'TAKE_INPUT':
            console.log(state.movie)
            return {
                ...state,
                input: action.payload
            }

        case 'LIST':
            console.log(state.movie)

            return {
                ...state,
                movie: action.payload
            }

        default:
            return {
                ...state
            }

        }
}



export default reducerText;