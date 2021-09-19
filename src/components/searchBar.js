import React from 'react';
import styled from 'styled-components';
import Button from './button';
import Icon from './icon';

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
  max-width: 500px;
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
    color: #cecece;
  }
`;

export const SearchInput = () => {
  return (
    <StyledInput
      type="text"
      id="search-input"
      name="search-input"
      className="search-input"
      placeholder="Wpisz min. 3 litery..."
    />
  );
};

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <div className="search-bar">
        <label for="search-input" className="search-label">
          <Icon name="search" clickable={false} />
        </label>
        <SearchInput />
        <Button secondary>A-Z</Button>
        <Button secondary>Z-A</Button>
      </div>
      <Button rounded />
    </StyledSearchBar>
  );
}
