import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledCustomerCards = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  .searchBar {
    height: 70px;
  }
`;

export default function CustomerCards() {
  return (
    <Layout loggedIn>
      <StyledCustomerCards>
        <div className="searchBar basicComponentsStyle"></div>
        <div className="customerCards basicComponentsStyle"></div>
      </StyledCustomerCards>
    </Layout>
  );
}
