const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const productInitialState = {
    products: ["PROCESSOR", "MOTHERBOARD", "RAM"],
    NumberOfProducts: 3,
};

const getProductAction = () => {
    return {
        type: GET_PRODUCTS,
    };
};

const addProductAction = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

const removeProductAction = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product,
    };
};

const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                NumberOfProducts: state.NumberOfProducts + 1,
            };
        case REMOVE_PRODUCT:
            const removeProduct = action.payload;
            const productIndex = state.products.indexOf(removeProduct);
            if (productIndex === -1) {
                return state;
            }
            const updatedProducts = [...state.products];
            updatedProducts.splice(productIndex, 1);
            return {
                ...state,
                products: updatedProducts,
                NumberOfProducts: state.NumberOfProducts - 1,
            };
        default:
            return state;
    }
};

const productStore = createStore(productReducer, applyMiddleware(logger));

productStore.subscribe(() => {
    console.log(productStore.getState());
});

productStore.dispatch(getProductAction());
productStore.dispatch(addProductAction("SSD"));
productStore.dispatch(addProductAction("HDD"));
productStore.dispatch(removeProductAction("HDD"));