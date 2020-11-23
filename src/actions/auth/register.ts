import { Dispatch } from 'redux';
import { gql } from '@apollo/client';
import { AuthActionTypes } from '..';
import { apolloClient } from '../../config/apollo-client';

export const registerUser = (
  name: string,
  phone: string,
  email: string,
  password: string,
) => (dispatch: Dispatch) => {
  apolloClient
    .mutate({
      mutation: gql`
        mutation registerUser($data: RegisterInput) {
          register(data: $data) {
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
          name,
          phone,
          email,
          password,
        },
      },
    })
    .then(
      ({
        data: {
          register: {
            id,
            detail: { name },
          },
        },
      }) => {
        dispatch({
          type: AuthActionTypes.REGISTER_SUCCESS,
          payload: { id, name },
        });
      },
    )
    .catch(() => {
      dispatch({
        type: AuthActionTypes.REGISTER_FAIL,
      });
    });
};
