const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_USER = "ADD_USER";

const initialState = {
    users: ["Anas"],
    count: 1,
}

const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            state;
    }
}

const userStore = createStore(userReduser, applyMiddleware(logger));

userStore.subscribe(() => {
    console.log(userStore.getState())
})

userStore.dispatch(addUserAction("Emon"))
userStore.dispatch(addUserAction("Nazin"))
userStore.dispatch(addUserAction("Faisal"))