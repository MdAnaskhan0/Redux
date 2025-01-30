const { createStore, combineReducers } = require("redux");

// Product 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialProducState = {
    products: ["Motherboard", "RAM"],
    NumberOfProducts: 2,
}

const getProductAction = () =>{
    return{
        type: GET_PRODUCTS,
    }
}

const addProductAction = (product) =>{
    return{
        type: ADD_PRODUCT,
        payload: product,
    }
}

const productReduser = (state=initialProducState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            }
        case ADD_PRODUCT:
            return{
                products: [...state.products, action.payload],
                NumberOfProducts: state.NumberOfProducts + 1,
            }
        default:
            return state;
    }
}

/* 
const productStore = createStore(productReduser);
productStore.subscribe(()=>{
    console.log(productStore.getState())
})

productStore.dispatch(getProductAction());
productStore.dispatch(addProductAction("SSD"));
productStore.dispatch(addProductAction("PROCESSOR"));
*/




// Cart
const CART_IMTES = "CART_ITEMS";
const ADD_ITEM_ON_CART = "ADD_ITEM_ON_CART";

const cartInitialState = {
    items: [],
    NumberOfItems: 0,
}

const cartItemAction = () => {
    return{
        type: CART_IMTES,
    }
}

const addItemOnCartAction = (item) => {
    return{
        type: ADD_ITEM_ON_CART,
        payload: item
    }
}

const cartReduser = (state=cartInitialState, action) =>{
    switch (action.type) {
        case CART_IMTES:
            return{
                ...state,
            }
        case ADD_ITEM_ON_CART:
            return{
                items: [...state.items, action.payload],
                NumberOfItems: state.NumberOfItems + 1,
            }
        default:
            return state;
    }
}

/*
const cartStore = createStore(cartReduser);
cartStore.subscribe(()=>{
    console.log(cartStore.getState())
})

cartStore.dispatch(cartItemAction());
cartStore.dispatch(addItemOnCartAction("RAM"));
cartStore.dispatch(addItemOnCartAction("SSD"));
*/


// ------- Combain Reduser --------
const combainReduser = combineReducers({
    productR : productReduser,
    cartR : cartReduser,
})
const combainStore = createStore(combainReduser)
combainStore.subscribe(()=>{
    console.log(combainStore.getState());
})




// Products
combainStore.dispatch(getProductAction());
combainStore.dispatch(addProductAction("SSD"));
combainStore.dispatch(addProductAction("PROCESSOR"));

// CartItem
combainStore.dispatch(cartItemAction());
combainStore.dispatch(addItemOnCartAction("RAM"));
combainStore.dispatch(addItemOnCartAction("SSD"));

