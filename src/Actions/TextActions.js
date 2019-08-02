import * as axios from 'axios';

export const takeInput = (event) => {

    return {
        type: 'TAKE_INPUT',
        payload: event.target.value

    }
}

export const display = (input) => {

    return dispatch => {
        dispatch(isLoading());

        axios.get(`http://www.omdbapi.com/?apikey=28011a5a&t=${input}`)
            .then(response => {
                let data = {
                    title: response.data.Title,
                    director: response.data.Director,
                    id: response.data.imdbID,
                    image: response.data.Poster
                };

                dispatch({
                    type: 'LIST',
                    payload: data
                });
            });
    }
}

export const isLoading = () => {
    return {
        type: 'LOADING'
    }
}

export default takeInput;





