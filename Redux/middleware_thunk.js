const { default: axios } = require("axios");
const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const { thunk } = require("redux-thunk");

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const REQUEST_DATA = "REQUEST_DATA";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_ERROR = "GET_DATA_ERROR";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const requestDataAction = () => {
    return {
        type: REQUEST_DATA,
    }
}

const getDataSuccessAction = (item) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: item,
    }
}

const getDataErrorAction = (error) => {
    return {
        type: GET_DATA_ERROR,
        payload: error
    }
}

const itemReduser = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isLoading: true,
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
            }
        case GET_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(requestDataAction());
        axios.get(API_URL)
        .then((res) => {
            const title = res.data.map((item)=>item.title);
            dispatch(getDataSuccessAction(title))
        })
        .catch((error)=>dispatch(getDataErrorAction((error.message))));
    }
}


const store = createStore(itemReduser, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData());