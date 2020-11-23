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
          login: { id },
        },
      }) => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            id,
          },
        });
      },
    )
    .catch(() => {
      dispatch({
        type: AuthActionTypes.LOGIN_FAIL,
      });
    });
};
