const { createStore } = require("redux");

const Increment = "INCREMENT";
const Decrement = "DECREMENT";
const Reset = "RESET";

// state
const initialState = {
    count : 0,
}

// dispatch Action
const incrementAction = () =>{
    return {
        type : Increment,
    }
}

const decrementAction = () =>{
    return {
        type : Decrement,
    }
}

const resetAction = () =>{
    return {
        type : Reset,
    }
}
// Reduser
const countReduser = (state=initialState, action) =>{
    switch (action.type) {
        case Increment:
            return {
                ...state,
                count : state.count + 1,
            }    
        case Decrement:
            return {
                ...state,
                count : state.count - 1,
            }
        case Reset: 
            return {
                ...state,
                count : 0
            }
        default:
            state;
    }
}

// store

// create store
const store = createStore(countReduser)

// subscribe Store
store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action 
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())