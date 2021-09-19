import React from 'react';
import styled from 'styled-components';
import App from '../components/app';
import CustomerCard from '../components/customerCard';
import Layout from '../components/layout';
import SearchBar from '../components/searchBar';

const StyledCustomersCard = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  .search-bar-container {
    padding: 10px 20px;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }

  .customer-cards-container {
    display: grid;
    border: 10px solid var(--white);
    max-height: calc(100vh - 190px);
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    overflow-y: auto;

    .ordered-list {
      display: grid;
      height: 100%;

      .letter {
        border-bottom: 1px solid #cecece;
        margin: 30px 0 10px;
        font-size: 24px;
      }
    }

    .customer-cards-list {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-auto-rows: max-content;
      gap: 20px;
      padding: 10px 10px 10px 0;
    }
  }
`;

const customers = [
  { firstName: 'Anna', lastName: 'Nowak' },
  { firstName: 'Joanna', lastName: 'Kowalska' },
  { firstName: 'Ewelina', lastName: 'Biedroń' },
  { firstName: 'Janina', lastName: 'Adamczyk' },
  { firstName: 'Janina', lastName: 'Adamczyk' },
  { firstName: 'Janina', lastName: 'Adamczyk' },
  { firstName: 'Jadwiga', lastName: 'Adamczyk' },
  { firstName: 'Klaudia', lastName: 'Cisowska' },
  { firstName: 'Gabriela', lastName: 'Manera' },
];

export default function CustomerCards() {
  const sorted = customers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
  const alphabetically = sorted.map(({ lastName }) => lastName[0]);
  const unique = alphabetically.filter(
    (item, index) => alphabetically.indexOf(item) === index
  );

  return (
    <App>
      <Layout loggedIn>
        <StyledCustomersCard>
          <div className="search-bar-container basic">
            <SearchBar />
          </div>
          <div className="customer-cards-container basic">
            {unique.map((item) => (
              <ol className="ordered-list">
                <div className="letter">{item}</div>
                <ul className="customer-cards-list">
                  {customers.map(({ firstName, lastName }, i) => {
                    if (lastName[0] === item) {
                      return (
                        <CustomerCard
                          key={i}
                          firstName={firstName}
                          lastName={lastName}
                        />
                      );
                    }
                  })}
                </ul>
              </ol>
            ))}
          </div>
        </StyledCustomersCard>
      </Layout>
    </App>
  );
}
