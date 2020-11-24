import { Dispatch } from 'redux';
import { gql } from '@apollo/client';
import { AuthActionTypes } from '..';
import { apolloClient } from '../../config/apollo-client';

export const loginUser = (email: string, password: string) => (
  dispatch: Dispatch,
) => {
  apolloClient
    .mutate({
      mutation: gql`
        mutation loginUser($data: LoginInput) {
          login(data: $data) {
            id
            email
            detail {
              name
            }
          }
        }
      `,
      variables: {
        data: {
          email,
          password,
        },
      },
    })
    .then(
      ({
        data: {
          login: {
            id,
            detail: { name },
          },
        },
      }) => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            id,
            name,
          },
        });
      },
    )
    .catch((err: Error) => {
      dispatch({
        type: AuthActionTypes.LOGIN_FAIL,
        payload: {
          error: err.message,
        },
      });
    });
};
