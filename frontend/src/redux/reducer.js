import { GET_PRODUCTS } from "./types";

const initialState = {
  products: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsCopy: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
