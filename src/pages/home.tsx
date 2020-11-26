import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { getAllProducts } from '../actions';
import Card from '../components/card';

const Home = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { isLoading, products, errors } = useSelector(
    (state: any) => state.product,
  );

  const getAll = useCallback(
    (take: number, skip: number) => dispatch(getAllProducts(take, skip)),
    [dispatch, getAllProducts],
  );

  useEffect(() => {
    getAll(10, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Clothing Store - Home</title>
      </Helmet>
      <Container>
        <Box flexDirection={'column'} pt={3}>
          {errors && errors.length > 0 && (
            <Collapse in={open}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {errors.join()}
              </Alert>
            </Collapse>
          )}
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <Box py={3}>
              <Grid container justify="space-between" spacing={4}>
                {products.map((product: any) => (
                  <Grid key={product.id} item>
                    <Card
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default React.memo(Home);
