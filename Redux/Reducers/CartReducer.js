let defaultState = {
    selectItems : { items: [] }
}

const CartReducer = (state = defaultState, action) => {
    switch(action.type)   {
        case "ADD_TO_CART": {
            let newState = { ... state }
            newState.selectItems = {
                items: [ ... newState.selectItems.items, action.payload ],
            }
            console.log(newState);
            return newState
        }
        default:
            return state
    }
}

export default CartReducer