import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 25px;
  text-transform: capitalize;
  border-radius: var(--borderRadius);
  font-weight: var(--regular);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--blue);
      color: var(--white);
    `};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--white);
      border: 1px solid var(--blue);
      color: var(--blue);
    `};

  ${({ rounded }) =>
    rounded &&
    css`
      padding: 0;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: var(--blue);
      color: var(--white);
      font-size: 32px;
    `};
`;

export default function Button({
  children,
  primary = true,
  secondary,
  rounded,
}) {
  return (
    <StyledButton primary={primary} secondary={secondary} rounded={rounded}>
      {rounded ? '+' : children}
    </StyledButton>
  );
}
