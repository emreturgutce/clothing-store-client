import React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const ProductDetail = () => {
  const productId = useLocation().pathname.split('/')[2];
  const { products } = useSelector((state: any) => state.product);
  const product = products.find((p: any) => p.id === productId);

  return (
    <>
      <Helmet>
        <title>Clothing Store - {product.name}</title>
      </Helmet>
      <Container>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </Container>
    </>
  );
};

export default React.memo(ProductDetail);
