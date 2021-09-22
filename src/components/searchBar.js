import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import { AddCustomerForm } from './forms';
import Icon from './icon';
import Modal from './modal';

const StyledSearchBar = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid var(--shadowColor);
  }

  .button {
    justify-self: flex-end;
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
        {/* <div className="search-bar">
          <label htmlFor="search-input" className="search-label">
            <Icon name="search" clickable={false} />
          </label>
          <Input placeholder="Wpisz min. 3 litery..." onChange={onChange} />
          <Button secondary>A-Z</Button>
          <Button secondary>Z-A</Button>
        </div> */}
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
