  const initialState = {
    products: [],
    status: '',
    error: null,
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_PENDING':
        return {
          ...state,
          status: 'pending',
        };
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          status: 'resolved',
          products: action.payload,
        };
      case 'FETCH_PRODUCTS_ERROR':
        return {
          ...state,
          status: 'rejected',
          error: action.payload,
        };
      default:
        return state;
    }
  };