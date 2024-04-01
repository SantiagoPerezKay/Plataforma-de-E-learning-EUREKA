import { GET_PRODUCTS } from "./types";
import axios from "axios";

const getProducts = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001");
    const products = apiData.data;
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};

export { getProducts };
