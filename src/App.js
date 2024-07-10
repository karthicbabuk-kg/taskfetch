import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchProducts } from './redux/actions';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import StoreProvider from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1 className="my-4">Product List</h1>
      <SearchBar />
      <ProductList products={filteredProducts} />
    </Container>
  );
};

const AppWrapper = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

export default AppWrapper;
