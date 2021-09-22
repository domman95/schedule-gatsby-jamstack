import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import App from '../components/app';
import CustomerCard from '../components/customerCard';
import Layout from '../components/layout';
import SearchBar from '../components/searchBar';
import { alphabet } from '../utils/alphabet';

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
    align-content: flex-start;
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

const fakeCustomers = [
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
  const [customersList, setCustomersList] = useState([]);

  useEffect(() => {
    const grouped = alphabet.map((i) => {
      const matchedCustomers = fakeCustomers.filter(
        (customer) => customer.lastName[0] === i && customer
      );
      return { id: i, customers: [...matchedCustomers] };
    });

    setCustomersList(grouped);
  }, []);

  const handleChange = (e) => {
    const matchWord = e.target.value;

    const filtered = customersList.map(({ id, customers }) => {
      const matched = customers.filter(
        ({ firstName, lastName }) =>
          firstName.toLowerCase().includes(matchWord.toLowerCase()) ||
          lastName.toLowerCase().includes(matchWord.toLowerCase())
      );

      return { id, customers: matched };
    });

    if (matchWord.length >= 3) {
      setCustomersList(filtered);
    }
    if (matchWord.length < 3) {
      const grouped = alphabet.map((i) => {
        const matchedCustomers = fakeCustomers.filter(
          (customer) => customer.lastName[0] === i && customer
        );
        return { id: i, customers: [...matchedCustomers] };
      });

      setCustomersList(grouped);
    }
  };

  return (
    <App>
      <Layout loggedIn>
        <StyledCustomersCard>
          <div className="search-bar-container basic">
            <SearchBar onChange={handleChange} />
          </div>
          <div className="customer-cards-container basic">
            {customersList.map(({ id, customers }) => {
              return (
                <ul className="ordered-list" key={id}>
                  <div className="letter">{id}</div>
                  {customers.length > 0 ? (
                    <ul className="customer-cards-list">
                      {customers.map(({ firstName, lastName }) => (
                        <CustomerCard
                          firstName={firstName}
                          lastName={lastName}
                        />
                      ))}
                    </ul>
                  ) : (
                    <p>Brak klientów</p>
                  )}
                </ul>
              );
            })}
          </div>
        </StyledCustomersCard>
      </Layout>
    </App>
  );
}
