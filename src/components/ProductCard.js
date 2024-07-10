import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.images[0]} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
        <Card.Text><strong>Rating:</strong> {product.rating}</Card.Text>
        <Card.Text><strong>Discount Percentage:</strong> {product.discountPercentage}%</Card.Text>
        <Card.Text><strong>Discount:</strong> ${product.discount}</Card.Text>
        <Card.Text><strong>Min Order Qty:</strong> {product.minimumOrderQuantity}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
