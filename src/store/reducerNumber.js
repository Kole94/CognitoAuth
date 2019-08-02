const initalState = {
    a: 20
}

const reducerNumber = (state = initalState, action) => {
    switch(action.type){
        case 'A':
            console.log('a');
            return{
                ...state,
                a: ++state.a
            }
            
    }

    return {...state};
}

export default reducerNumber;