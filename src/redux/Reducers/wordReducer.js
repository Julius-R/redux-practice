const initialState = {
    phrase: "",
    letterCount: 0
}

const wordReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_PHRASE":
            return {
                ...state,
                phrase: action.payload,
                letterCount: action.payload.length
            }
        default:
            return state
    }
}

export default wordReducer