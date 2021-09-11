import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import Nav from './nav';
import SEO from './seo';
import 'normalize.css';

export default function Layout({ loggedIn = false, children }) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Nav loggedIn={loggedIn} />
      {children}
    </>
  );
}
