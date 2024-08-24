const initialState = {
    value:""
}

function reducer(state=initialState,action){
    switch(action.type){
        case "KEYBOARDNUM":
            return {...state, value:state.value + action.payload.num}
        case "INPUTR3":
            return {...state, value:state.value + action.payload.key}
        case "INPUTRESET":
            return {...state,value:""}
            default:{
                return {...state}
            }
    }
}

export default reducer;