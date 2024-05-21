/** @format */

import { OBTENER_INFO_SUCCESS, OBTENER_INFO_FAIL } from "../actions/types";

const initialState = {
  products: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_INFO_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
      };
    case OBTENER_INFO_FAIL:
      return {
        ...state,
        error: "Failed to fetch products",
      };
    default:
      return state;
  }
};

export default productsReducer;
