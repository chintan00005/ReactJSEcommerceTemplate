import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 30, description: 'Description for Product 3' },
];

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
