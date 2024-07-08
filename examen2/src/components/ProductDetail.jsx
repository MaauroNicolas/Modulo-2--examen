// ./src/components/ProductDetail.jsx

import React, { useState, useEffect } from 'react';
import productsData from '../data/Products.json';

const handleBuyClick = ()=>{
    alert ("compraste el producto");
   }

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulando una llamada a una API con datos del archivo JSON
    const getProductDetails = () => {
      // Encontrar el producto por su id
      const foundProduct = productsData.find((prod) => prod.id === productId);
      setProduct(foundProduct);
    };
   
    getProductDetails();
  }, [productId]);

  // Renderizar el detalle del producto
  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.photo} alt='fot' width="100"/> <br></br>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          
          <button onClick={handleBuyClick}>Comprar</button>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ProductDetail;
