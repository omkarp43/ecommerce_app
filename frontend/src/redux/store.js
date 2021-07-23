import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers'

const reducer=combineReducers({
    cart:cartReducer,
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer

}) 
const cartItemInLocalStorage=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
const INTIAL_STATE={
    cart:{
        cartItems:cartItemInLocalStorage,
    }
}
const middleware=[thunk];
const store=createStore(
    reducer,
    INTIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)
 
export default store;