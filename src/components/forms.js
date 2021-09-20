import React from 'react';
import styled from 'styled-components';
import { Input } from './searchBar';

const StyledForm = styled.form`
  width: 100%;
  margin: 20px 0;

  .label {
    display: inline-block;
    width: 100%;
    font-weight: var(--light);
    margin: 10px 0 5px;
  }

  .input {
    height: 50px;
  }
`;

export const AddCustomerForm = () => {
  return (
    <StyledForm className="form" id="form">
      <label className="label" htmlFor="customer-first-name">
        imię
      </label>
      <Input placeholder="wpisz imię..." name="customer-first-name" />
      <label className="label" htmlFor="customer-last-name">
        nazwisko
      </label>
      <Input placeholder="wpisz nazwisko..." name="customer-last-name" />
      <label className="label" htmlFor="customer-phone-number">
        numer telefonu
      </label>
      <Input
        placeholder="wpisz numer telefonu..."
        name="customer-phone-number"
      />
    </StyledForm>
  );
};

export const AddVisitForm = () => {
  return (
    <StyledForm className="form" id="form">
      <label className="label" htmlFor="visit-customer">
        wybierz klienta
      </label>
      <Input placeholder="wybierz z listy..." name="visit-customer" />
      <label className="label" htmlFor="visit date">
        wybierz datę wizyty
      </label>
      <Input placeholder="wybierz datę wizyty..." name="visit-date" />
      <label className="label" htmlFor="visit-time">
        wybierz godzinę wizyty
      </label>
      <Input placeholder="wybierz godzinę wizyty..." name="visit-time" />
      <label className="label" htmlFor="visit-services">
        wybierz usługi
      </label>
      <Input placeholder="wybierz z listy..." name="visit-services" />
    </StyledForm>
  );
};
