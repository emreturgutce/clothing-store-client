import { Dispatch } from 'redux';
import { gql } from '@apollo/client';
import { AuthActionTypes } from '../types';
import { apolloClient } from '../../config/apollo-client';

export const getUser = () => (dispatch: Dispatch) => {
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
          }
        }
      `,
    })
    .then(
      ({
        data: {
          register: { id },
        },
      }) => {
        dispatch({
          type: AuthActionTypes.USER_LOADED,
        });
      },
    )
    .catch((err) => {
      console.error(err);
      dispatch({
        type: AuthActionTypes.AUTH_FAIL,
      });
    });
};
