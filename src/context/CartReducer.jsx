import { SHOW_HIDDEN_CART, ADD_TO_CART, REMOVE_ITEM } from "./CartType";

const Reducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDDEN_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default Reducer;