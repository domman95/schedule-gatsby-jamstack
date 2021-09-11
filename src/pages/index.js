import React from 'react';
import SEO from '../components/seo';
import GlobalStyle from '../styles/GlobalStyles';
import 'normalize.css';
import Nav from '../components/nav';

export default function LandingPage() {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Nav />
    </>
  );
}
