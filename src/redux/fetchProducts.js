import products from "./api/products";

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
