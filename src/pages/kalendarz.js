import React, { useState } from 'react';
import styled from 'styled-components';
import App from '../components/app';
import Layout from '../components/layout';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(-100%);
  z-index: 10;

  &.active {
    transition: 0.1;
    transform: translateX(0);
  }
`;

const StyledSchedule = styled.main`
  padding: 20px;

  display: grid;
  grid-template-columns: auto 1fr;

  .calendar-widget {
    position: relative;
    width: 450px;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.active {
      transform: translateX(0);
    }
  }

  @media (max-width: 1500px) {
    grid-template-columns: 1fr;

    .calendar-widget {
      position: fixed;
      z-index: 10;
      height: calc(100vh - 110px);
      left: 0;
      transform: translateX(-100%);

      .widgetButton {
        position: absolute;
        top: 50px;
        right: -30px;
        width: 30px;
        height: 70px;
        border: none;
        border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
        box-shadow: 6px 6px 6px var(--shadowColor);
        background-color: var(--white);
      }
    }
  }
`;

export default function Schedule() {
  const [toggleWidget, setToggleWidget] = useState(false);

  const handleToggle = () => setToggleWidget(!toggleWidget);

  return (
    <App>
      <Layout loggedIn>
        <Background
          className={`${toggleWidget && 'active'}`}
          onClick={handleToggle}
        />
        <StyledSchedule>
          <div className={`calendar-widget basic ${toggleWidget && 'active'}`}>
            <button className="widgetButton" onClick={handleToggle} />
          </div>
          <div className="calendar-main basic"></div>
        </StyledSchedule>
      </Layout>
    </App>
  );
}
