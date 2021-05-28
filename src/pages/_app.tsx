import { AppProps } from 'next/app';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from 'next-auth/client'
import '@/styles/global.css';
import React from 'react';
import Layout from '@/../components/Layout';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';


const link = new HttpLink({
  uri: "https://novel-monkey-94.hasura.app/v1/graphql",
  headers: {
    'x-hasura-admin-secret': 'YAfDVV13QSPbCWKjRsi2spWbyEJBYCbDb9U8OarAm1loz2OmtxlJs9ubp9TRkDF0',
  }
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
  <PayPalScriptProvider options={{'client-id': 'test'}}>
  <Provider session={pageProps.session}>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Provider>
  </PayPalScriptProvider>
  </ApolloProvider>
  );
}
