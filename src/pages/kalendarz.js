import React, { useState } from 'react';
import styled from 'styled-components';
import App from '../components/app';
import Layout from '../components/layout';
import ScheduleOneDayColumn from '../components/scheduleOneDayColumn';

const StyledSchedule = styled.main`
  display: grid;
  grid-template-columns: ${({ active }) => (active ? 'auto 1fr' : '1fr')};
  padding: 20px;

  .calendar-widget {
    position: fixed;
    z-index: 10;
    height: calc(100vh - 110px);
    left: 0;
    width: 450px;
    transform: translateX(-100%);
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.active {
      position: relative;
      transform: translateX(0);
    }

    .widgetButton {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50px;
      right: -30px;
      width: 30px;
      height: 50px;
      border: none;
      border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      box-shadow: 6px 6px 6px var(--shadowColor);
      background-color: var(--white);
      cursor: pointer;
      --color: var(--shadowColor);

      &::before {
        content: '';
        position: absolute;
        width: 16px;
        border-bottom: 2px solid var(--color);
        box-shadow: 0 -6px 0 var(--color), 0 6px 0 var(--color);
      }

      &:hover::before {
        --color: var(--blue);
      }
    }
  }

  .calendar-main {
    display: grid;
    grid-template-columns: repeat(7, 600px);
    max-height: calc(100vh - 110px);
    border: 10px solid var(--white);
    overflow-y: auto;

    .column {
      border-right: 1px solid #cecece;

      &:nth-last-child(1) {
        border: none;
      }
    }
  }

  @media (min-width: 1500px) {
    grid-template-columns: auto 1fr;

    .calendar-widget {
      position: relative;
      transform: translateX(0);
      .widgetButton {
        display: none;
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
        <StyledSchedule active={toggleWidget}>
          <div className={`calendar-widget basic ${toggleWidget && 'active'}`}>
            <button className="widgetButton" onClick={handleToggle} />
            <div className="calendar-calendar"></div>
            <div className="calendar-customersList"></div>
          </div>
          <div className="calendar-main basic">
            <ScheduleOneDayColumn />
            <ScheduleOneDayColumn />
            <ScheduleOneDayColumn />
            <ScheduleOneDayColumn />
            <ScheduleOneDayColumn />
            <ScheduleOneDayColumn />
            <ScheduleOneDayColumn />
          </div>
        </StyledSchedule>
      </Layout>
    </App>
  );
}
