const takeInput = (event) => {

    
    return dispatch => {
        var a = event.target.value

        setTimeout(() => {

            dispatch({
                type: 'TAKE_INPUT',
                payload: a
            });
        }, 2000);
    }
}

export default takeInput;