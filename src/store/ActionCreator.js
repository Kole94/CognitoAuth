export const click = (e) => {
    console.log(e)
    return {
        type: 'CLICK',
        payload: e
    }
}