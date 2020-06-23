import _ from "lodash";
import { sortProducts } from "./fetchProducts";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        ..._.mapKeys(action.payload.products, "productId"),
      };
    case "FETCH_PRODUCT_DETAIL":
      return { ...state, [action.payload.productId]: action.payload };
    default:
      return state;
  }
};

export const sortReducer = (state = {}, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
