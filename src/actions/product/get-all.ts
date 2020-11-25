import { Dispatch } from 'redux';
import { gql } from '@apollo/client';
import Cookies from 'js-cookie';
import { AuthActionTypes, ProductActionTypes } from '..';
import { apolloClient } from '../../config/apollo-client';

export const getAllProducts = () => (dispatch: Dispatch) => {
  const cookie = Cookies.get('auth_token');

  if (!cookie) {
    dispatch({ type: AuthActionTypes.AUTH_FAIL });
  } else {
    dispatch({ type: ProductActionTypes.LOADING });

    apolloClient
      .query({
        query: gql`
          query getProducts($data: PaginationInput) {
            getProducts(data: $data) {
              items {
                id
                name
                price
                description
              }
              hasMore
              total
            }
          }
        `,
        variables: {
          data: {
            take: 5,
            skip: 0,
          },
        },
      })
      .then(
        ({
          data: {
            getProducts: { items },
          },
        }) => {
          dispatch({
            type: ProductActionTypes.LOADING_SUCCESS,
            payload: { products: [...items] },
          });
        },
      )
      .catch((err: Error) => {
        dispatch({
          type: ProductActionTypes.LOADING_FAILED,
          payload: { error: err.message },
        });
      });
  }
};
