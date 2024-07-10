export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const formattedProducts = data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    rating: product.rating,
    discountPercentage: product.discountPercentage,
    discount: parseFloat((product.price * product.discountPercentage / 100).toFixed(2)),
    minimumOrderQuantity: product.minimumOrderQuantity,
    images: product.images
  }));
  dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: formattedProducts });
};

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term
});
