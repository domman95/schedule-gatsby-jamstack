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
    --shadowColor: rgba(0,0,0,.25);
    --regular: 400;
    --semiBold: 600;
    --extraBold: 800;
  }

  html {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: var(--black);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
