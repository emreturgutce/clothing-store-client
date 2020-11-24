import { Dispatch } from 'redux';
import { gql } from '@apollo/client';
import { AuthActionTypes } from '..';
import { apolloClient } from '../../config/apollo-client';

export const logout = () => (dispatch: Dispatch) => {
  apolloClient
    .query({
      query: gql`
        {
          logout
        }
      `,
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: AuthActionTypes.LOGOUT_SUCCESS,
      });
    })
    .catch(() => {});
};
