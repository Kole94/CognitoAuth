
const initalState = {
    input: 'GLOBAL BRTAIN',
    list: []
}

const reducerText = (state = initalState, action) => {
    

    switch(action.type){
        
        case 'TAKE_INPUT':
            return {
                ...state,
                input: action.payload
            }
        case 'LIST':

            var a = [];
            a = state.list;
            a.push(state.input);
            state.list = a;
            console.log(state.input)
            console.log('HELLO BRE');

            return{
                ...state,
                list: a
            }
    }
    return {...state};
}



export default reducerText;