import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import { AddCustomerForm } from './forms';
import Modal from './modal';

const StyledSearchBar = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid var(--shadowColor);
  }

  .search-bar {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .search-label {
      display: none;

      @media (min-width: 700px) {
        display: block;
      }
    }
  }
`;

const StyledInput = styled.input`
  border: 1px solid #cecece;
  border-radius: var(--borderRadius);
  max-height: 50px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 16px;
  color: var(--black);
  outline: none;

  &:focus {
    border: 1px solid var(--blue);
  }

  &::placeholder {
    font-size: 14px;
    font-weight: var(--light);
    color: #cecece;
  }
`;

export const Input = ({
  placeholder = '',
  type = 'text',
  name,
  onChange = null,
}) => {
  return (
    <StyledInput
      type={type}
      id={name}
      name={name}
      className="input"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default function SearchBar({ onChange }) {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = () => setToggleModal(!toggleModal);

  return (
    <>
      <StyledSearchBar>
        <Button rounded onClick={handleModal} />
      </StyledSearchBar>
      {toggleModal && (
        <Modal title="dodaj klienta" onClick={handleModal}>
          <AddCustomerForm />
        </Modal>
      )}
    </>
  );
}
