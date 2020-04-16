let reducer = (state, action) => {

    if (state === undefined) {
        state = {
            pokemon: []
        }
    }


    switch (action.type) {
        case 'InitialData':
            return {
                ...state,
                pokemon: action.data
            }
        default:
            return state;

    }

}

export default reducer