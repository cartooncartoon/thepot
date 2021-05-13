import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client'
import '@/styles/global.css';
import React from 'react';
import Layout from '@/../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider session={pageProps.session}>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Provider>
  );
}
