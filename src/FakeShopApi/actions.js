export const fetchProductsPending = () => ({
  type: 'FETCH_PRODUCTS_PENDING',
});

export const fetchProductsSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: products,
});

export const fetchProductsError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  payload: error,
});