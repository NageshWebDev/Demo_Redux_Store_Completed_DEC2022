import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCartState = {
    showCart: false
}

const initialCartItems = {
    cartItem: {},
    cartItemArray: [],
    totalAmount: 0,
    totalQuantity: 0
}

const initialSpecialProduct = {
    message: null,
    product: {}
}

const toggleCartSlice = createSlice({
    name: 'toggleCart',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart
        }, // Operational Logic
    }
})

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartItems,
    reducers: {
        addToCart(state, action) {
            console.log(action.payload)
            state.cartItem = action.payload
            const index = state.cartItemArray.findIndex(item => item.id === state.cartItem.id)
            if (index < 0) {
                state.cartItemArray.push(state.cartItem);
                state.totalQuantity = state.cartItemArray.reduce((total, currentVal) => total + currentVal.quantity, 0)
                state.totalAmount = state.cartItemArray.reduce((total, currentVal) => total + (currentVal.quantity * currentVal.price), 0)
            }
        },
        decQuantityByOne(state, action) {
            const itemId = action.payload.id
            const index = state.cartItemArray.findIndex(item => item.id === itemId)
            if (index >= 0 && state.cartItemArray[index].quantity > 0) {
                state.cartItemArray[index].quantity -= 1;
                state.cartItemArray = state.cartItemArray.filter(item => item.quantity > 0)
                state.totalQuantity = state.cartItemArray.reduce((total, currentVal) => total + currentVal.quantity, 0)
                state.totalAmount = state.cartItemArray.reduce((total, currentVal) => total + (currentVal.quantity * currentVal.price), 0)
            }
        },
        incQuantityByOne(state, action) {
            const itemId = action.payload.id
            const index = state.cartItemArray.findIndex(item => item.id === itemId)
            if (index >= 0 && state.cartItemArray[index].quantity < 10) {
                state.cartItemArray[index].quantity += 1;
                state.cartItemArray = state.cartItemArray.filter(item => item.quantity > 0)
                state.totalQuantity = state.cartItemArray.reduce((total, currentVal) => total + currentVal.quantity, 0)
                state.totalAmount = state.cartItemArray.reduce((total, currentVal) => total + (currentVal.quantity * currentVal.price), 0)
            }
        },

    }
})

const speProductSlice = createSlice({
    name: 'specialProduct',
    initialState: initialSpecialProduct,
    reducers: {
        getStatus(state, action) {
            state.message = action.payload.message;
        },
        getSpProduct(state, action){
            state.product = action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        cartState: toggleCartSlice.reducer,
        cartItems: cartItemsSlice.reducer,
        specialProduct: speProductSlice.reducer
    }
})

export default store;
export const toggleCartActions = toggleCartSlice.actions;
export const cartItemsActions = cartItemsSlice.actions;
export const productAction = speProductSlice.actions;