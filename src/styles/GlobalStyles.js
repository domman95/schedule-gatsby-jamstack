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
    padding: 20px;
    background-color: var(--backgroundColor);
    gap: 10px;
  }

  .basicComponentsStyle {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 6px 6px 12px var(--shadowColor);
    // delete it later
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
  }
`;

export default GlobalStyle;
