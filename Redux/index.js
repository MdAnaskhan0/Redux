// Create a counter app using redux. 

const { createStore } = require("redux");

// Define Const variable
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_COUNT_BY_VALUE = "INCREMENT_COUNT_BY_VALUE";


// Create State:
const initialCounterState = {
    count: 0
}

// Dispatch Action:
const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}

const resetAction = () => {
    return {
        type : RESET,
    }
}

const incrementCountByValueAction = (value) => {
    return {
        type : INCREMENT_COUNT_BY_VALUE,
        payload: value,
    }
}

// Reduser:
const countReduser = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return{
                ...state,
                count: state.count = 0,
            }
        case INCREMENT_COUNT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload,
            }
        default:
            state;
    }
}


// Store: -> getState(), dispatch(), subscribe()
// create store 
const storeCreate = createStore (countReduser);

// subscribe Store:
storeCreate.subscribe(()=>{
    console.log(storeCreate.getState())
})

// dispach action
storeCreate.dispatch(incrementAction());
storeCreate.dispatch(incrementAction());
storeCreate.dispatch(decrementAction());
storeCreate.dispatch(resetAction());
storeCreate.dispatch(incrementAction());
storeCreate.dispatch(incrementAction());
storeCreate.dispatch(decrementAction());
storeCreate.dispatch(incrementCountByValueAction(15));
