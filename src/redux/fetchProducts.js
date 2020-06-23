import products from "./api/products";
import axios from "axios";

export const fetchProducts = (pageNumber) => async (dispatch) => {
  //const { pageNumber } = 1;
  const response = await products.get(
    `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${pageNumber}/8`
  );
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data,
  });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const response = await products.get(
    `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/1/8/${productId}`
  );
  dispatch({
    type: "FETCH_PRODUCT_DETAIL",
    payload: response.data,
  });
};

export const sortProducts = () => {
  return (dispatch) => {
    axios
      .get(
        "https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/1/10?minPrice=500&maxPrice=1000&inStock=true&minReviewCount=2"
      )
      .then((response) => {
        const users = response.data.products;
        console.log(users, "api call data");
        dispatch({
          type: "SORT_PRODUCTS",
          payload: response.data.products,
        });
      })
      .catch((error) => {
        dispatch(error.message);
      });
  };
};
