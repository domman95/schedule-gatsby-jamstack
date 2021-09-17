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

  a {
    text-decoration: none;
    color: var(--black);

    &:hover {
      text-decoration: underline;
    }
  }

  main {
    max-width: 1920px;
    margin: 0 auto;
    min-height: calc(100vh - 70px);
    background-color: var(--backgroundColor);
    gap: 20px;
  }

  .basic {
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    background-color: var(--white);
  }
`;

export default GlobalStyle;
