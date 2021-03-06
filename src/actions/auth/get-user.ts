import { Dispatch } from 'redux';
import { gql } from '@apollo/client';
import Cookies from 'js-cookie';
import { AuthActionTypes } from '..';
import { apolloClient } from '../../config/apollo-client';

export const getUser = () => (dispatch: Dispatch) => {
  const cookie = Cookies.get('auth_token');

  if (!cookie) {
    dispatch({ type: AuthActionTypes.AUTH_FAIL });
  } else {
    dispatch({
      type: AuthActionTypes.USER_LOADING,
    });

    apolloClient
      .query({
        query: gql`
          {
            me {
              id
              email
              detail {
                name
              }
            }
          }
        `,
      })
      .then(
        ({
          data: {
            me: {
              id,
              detail: { name },
            },
          },
        }) => {
          setTimeout(() => {
            dispatch({
              type: AuthActionTypes.AUTH_SUCCESS,
              payload: { id, name },
            });
            dispatch({ type: AuthActionTypes.USER_LOADED });
          }, 1000);
        },
      )
      .catch(() => {
        dispatch({
          type: AuthActionTypes.AUTH_FAIL,
        });
      });
  }
};
