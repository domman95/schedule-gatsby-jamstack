import React from 'react';
import styled from 'styled-components';
import App from '../components/app';
import CustomerCard from '../components/customerCard';
import Layout from '../components/layout';
import SearchBar from '../components/searchBar';

const StyledCustomersCard = styled.main`
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  .search-bar-container {
    padding: 10px 20px;
  }

  .customer-cards-container {
    display: grid;
    border: 10px solid var(--white);
    max-height: calc(100vh - 190px);

    .customer-cards-list {
      max-width: 1300px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      overflow-y: auto;
      padding: 10px 10px 10px 0;
    }
  }
`;

export default function CustomerCards() {
  return (
    <App>
      <Layout loggedIn>
        <StyledCustomersCard>
          <div className="search-bar-container basic">
            <SearchBar />
          </div>
          <div className="customer-cards-container basic">
            <ul className="customer-cards-list">
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
              <CustomerCard></CustomerCard>
            </ul>
          </div>
        </StyledCustomersCard>
      </Layout>
    </App>
  );
}
