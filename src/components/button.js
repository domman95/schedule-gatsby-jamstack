import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 25px;
  text-transform: capitalize;
  border-radius: var(--borderRadius);
  font-weight: var(--regular);
  font-size: 18px;
  white-space: nowrap;

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
      width: 40px;
      height: 40px;
      background-color: var(--blue);
      color: var(--white);
      font-size: 28px;
      line-height: 42px;
    `};
`;

export default function Button({
  children,
  primary = true,
  secondary,
  rounded,
  type = '',
  form = false,
  onClick,
}) {
  return (
    <StyledButton
      className="button"
      primary={primary}
      secondary={secondary}
      rounded={rounded}
      type={type}
      htmlForm={form}
      onClick={onClick}>
      {rounded ? '+' : children}
    </StyledButton>
  );
}
