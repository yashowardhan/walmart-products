import _ from "lodash";

export default (state = {}, action) => {
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
