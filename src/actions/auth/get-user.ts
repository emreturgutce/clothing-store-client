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
    apolloClient
      .query({
        query: gql`
          {
            me {
              id
              email
            }
          }
        `,
      })
      .then(
        ({
          data: {
            me: { id },
          },
        }) => {
          setTimeout(() => {
            dispatch({ type: AuthActionTypes.AUTH_SUCCESS, payload: { id } });
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
