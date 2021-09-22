import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from './icon';
import { Input } from './searchBar';

const StyledCustomersList = styled.div`
  border-radius: var(--borderRadius);
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  gap: 20px;

  .input {
    height: 50px;
  }

  .customers-list {
    border: 1px solid #cecece;
    border-radius: var(--borderRadius);
    padding: 10px;
    overflow-y: auto;

    .customer {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      list-style: none;
      border-bottom: 1px solid #cecece;
      font-size: 18px;
      padding: 10px 0 5px;
      margin-bottom: 10px;
      font-weight: var(--light);

      a {
        display: inline-block;
        width: 100%;
      }
    }
  }
`;

export default function CustomersList() {
  return (
    <StyledCustomersList>
      <Input placeholder="Wpisz min. 3 litery..." />
      <ul className="customers-list">
        <li className="customer">
          <Link to="/">Anna Nowak</Link>
          <Icon name="star" />
        </li>
      </ul>
    </StyledCustomersList>
  );
}
