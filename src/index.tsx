import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import App from './app';
import { store } from './store';
import './index.css';
import { apolloClient } from './config/apollo-client';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app'),
);
