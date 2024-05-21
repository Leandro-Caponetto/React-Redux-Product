/** @format */

import { OBTENER_INFO_SUCCESS, OBTENER_INFO_FAIL } from "./types";

export const setProducts = () => async (dispatch) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (res.ok) {
      dispatch({
        type: OBTENER_INFO_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: OBTENER_INFO_FAIL,
      });
    }
  } catch (error) {
    dispatch({
      type: OBTENER_INFO_FAIL,
    });
  }
};
