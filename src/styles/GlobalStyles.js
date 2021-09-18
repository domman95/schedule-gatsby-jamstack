import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --blue: #0075ff;
    --lightgrey: #cecece;
    --black: #111111;
    --white: #fafafa;
    --backgroundColor: #eeeeee;
    --shadowColor: rgba(0,0,0,.25);
    --regular: 400;
    --semiBold: 600;
    --extraBold: 800;
    --boxShadow: 6px 6px 12px var(--shadowColor);
    --borderRadius: 6px;
  }

  html {
    font-family: 'Poppins', sans-serif;
    background-color: var(--backgroundColor);
  }

  h1, h2, h3, h4, h5, h6, p, a {
    color: var(--black);
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  main {
    margin: 0 auto;
    min-height: calc(100vh - 70px);
    background-color: var(--backgroundColor);
    gap: 20px;
  }

  // styles for every components inside app
  .basic {
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    background-color: var(--white);
  }

  button {
    cursor: pointer;
    border: none;

    &:active {
      opacity: 0.5;
    }
  }
`;

export default GlobalStyle;
