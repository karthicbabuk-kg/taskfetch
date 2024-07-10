import { FETCH_PRODUCTS_SUCCESS, SET_SEARCH_TERM } from './actions';

const initialState = {
  products: [],
  searchTerm: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
