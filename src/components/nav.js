import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 6px var(--shadowColor);
  padding: 10px 20px;
  background-color: var(--white);

  .logo {
    font-size: 28px;
    font-weight: var(--semiBold);
    color: var(--blue);
    padding: 5px 45px 5px 25px;
    text-decoration: none;
  }

  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80');
    background-size: cover;
    border: none;
    cursor: pointer;
    transition: 0.1s linear;

    &:hover {
      opacity: 0.75;
    }
  }

  ul {
    display: flex;

    li {
      list-style: none;
      padding: 10px 25px;

      &.signUp {
        background-color: var(--blue);
        border-radius: 25px;

        a {
          color: var(--white);
        }
      }

      a {
        font-size: 16px;
        font-weight: var(--regular);
      }
    }
  }

  ${({ loggedin }) =>
    loggedin &&
    css`
      background-color: var(--blue);

      .logo,
      a {
        color: var(--white);
      }

      ul {
        flex: 1;
        box-shadow: -1px 0px 0px var(--white);
      }
    `}
`;

const LoggedIn = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/panel-glowny">panel główny</Link>
        </li>
        <li>
          <Link to="/kalendarz">kalendarz</Link>
        </li>
        <li>
          <Link to="/karty-klientow">karty klientów</Link>
        </li>
      </ul>
      <button className="profile" />
    </>
  );
};

const LoggedOut = () => {
  return (
    <ul>
      <li>
        <Link to="/">Zaloguj się</Link>
      </li>
      <li className="signUp">
        <Link to="/">Zarejestruj się</Link>
      </li>
    </ul>
  );
};

export default function Nav({ loggedIn }) {
  return (
    <StyledNav loggedin={loggedIn}>
      <Link to="/" className="logo">
        Schedule
      </Link>
      {loggedIn ? <LoggedIn /> : <LoggedOut />}
    </StyledNav>
  );
}
