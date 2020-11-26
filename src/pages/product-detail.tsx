import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const ProductDetail = () => {
  const productId = useLocation().pathname.split('/')[2];

  return (
    <>
      <Helmet>
        <title>Clothing Store - Product Name</title>
      </Helmet>
      <Container>
        <h1>Detail Page</h1>
      </Container>
    </>
  );
};

export default React.memo(ProductDetail);
