import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 6px var(--shadowColor);
  padding: 10px 20px;
  background-color: var(--white);
  z-index: 999;

  .logo {
    font-size: 28px;
    font-weight: var(--semiBold);
    color: var(--blue);
    padding: 5px 45px 5px 25px;
    text-decoration: none;
  }

  .menu {
    display: none;
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
    z-index: 10;

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

        li {
          display: flex;
          align-items: center;
          position: relative;

          a {
            display: inline-block;
            &.active {
              background-color: var(--white);
              padding: 5px 10px;
              transform: skewX(-10deg);
              color: var(--blue);
            }
          }

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            background-color: var(--white);
            border-radius: 50%;
          }

          &:nth-last-child(1)::before {
            display: none;
          }
        }
      }
    `}

  @media (max-width: 768px) {
    .menu {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      transition: 0.1s linear;
      transform: ${({ toggle }) => toggle && 'rotate(45deg)'};

      &::before {
        content: '';
        position: absolute;
        width: 60%;
        border-bottom: 2px solid var(--black);
        box-shadow: ${({ toggle }) =>
          toggle ? 'none' : '0 8px 0 var(--black), 0 -8px 0 var(--black)'};
      }

      &::after {
        content: '';
        position: absolute;
        width: 60%;
        border-bottom: 2px solid var(--black);
        transform: ${({ toggle }) => toggle && 'rotate(90deg)'};
      }
    }

    ul {
      position: fixed;
      background-color: var(--white);
      top: 0;
      right: 0;
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 70px 20px;
      box-shadow: -6px 0 12px var(--shadowColor);
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: ${({ toggle }) =>
        toggle ? 'translateX(0)' : 'translateX(100%)'};

      li a {
        color: var(--black);

        &.active {
          display: inline-block;
          background-color: var(--blue);
          padding: 5px 10px;
          transform: skewX(-10deg);
          color: var(--white);
        }
      }
    }
  }
`;

const LoggedIn = ({ handleToggle }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/panel-glowny" activeClassName="active">
            panel główny
          </Link>
        </li>
        <li>
          <Link to="/kalendarz" activeClassName="active">
            kalendarz
          </Link>
        </li>
        <li>
          <Link to="/karty-klientow" activeClassName="active">
            karty klientów
          </Link>
        </li>
      </ul>
      <button className="profile" onClick={handleToggle} />
    </>
  );
};

const LoggedOut = ({ handleToggle }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Zaloguj się</Link>
        </li>
        <li className="signUp">
          <Link to="/">Zarejestruj się</Link>
        </li>
      </ul>
      <button className="menu" onClick={handleToggle} />
    </>
  );
};

export default function Nav({ loggedIn }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <StyledNav loggedin={loggedIn} toggle={toggle}>
      <Link to="/" className="logo">
        Schedule
      </Link>
      {loggedIn ? (
        <LoggedIn handleToggle={handleToggle} />
      ) : (
        <LoggedOut handleToggle={handleToggle} />
      )}
    </StyledNav>
  );
}
