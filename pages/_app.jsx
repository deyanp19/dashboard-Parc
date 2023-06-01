import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Fragment from 'react';

export default function MyApp(props) {
    const { Component,pageProps } = props;
  
    return (
         <>
            <Head>
            <title>Payarc</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
  }
  
  MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
  };