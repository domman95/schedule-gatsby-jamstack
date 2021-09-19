import React, { useState } from 'react';
import styled from 'styled-components';
import App from '../components/app';
import Button from '../components/button';
import CustomersList from '../components/customersList';
import Icon from '../components/icon';
import Layout from '../components/layout';
import ScheduleOneDayColumn from '../components/scheduleOneDayColumn';

const StyledSchedule = styled.main`
  display: grid;
  grid-template-columns: ${({ active }) => (active ? 'auto 1fr' : '1fr')};
  padding: 20px;

  .schedule-widget {
    display: grid;
    grid-template-rows: 1fr 1fr;
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

    .schedule-widget-calendar,
    .schedule-widget-customers-list {
    }

    .schedule-widget-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50px;
      right: -30px;
      width: 30px;
      height: 50px;
      border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      box-shadow: 6px 6px 6px var(--shadowColor);
      background-color: var(--white);
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

  .schedule {
    display: grid;
    grid-template-columns: 1fr;
    max-height: calc(100vh - 110px);
    border: 10px solid var(--white);

    .schedule-header {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 10px;
      align-items: center;
      height: 70px;
      margin: 10px 0 20px;

      .schedule-header-date {
        display: flex;
        align-items: center;
        justify-self: flex-start;
        gap: 20px;

        h2 {
          font-weight: var(--semiBold);
          font-size: 26px;
          font-size: clamp(16px, 1.5vw, 26px);
        }

        .change-date-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .manage-schedule-buttons {
        display: flex;
        justify-self: flex-end;
        gap: 10px;
      }
    }

    .schedule-wrapper {
      display: grid;
      grid-template-columns: repeat(7, 600px);
      overflow-y: auto;
      border-radius: var(--borderRadius);

      .column {
        border-right: 1px solid #cecece;

        &:nth-last-child(1) {
          border: none;
        }
      }
    }
  }

  @media (min-width: 1500px) {
    grid-template-columns: auto 1fr;

    .schedule-widget {
      position: relative;
      transform: translateX(0);

      .schedule-widget-button {
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
          <div className={`schedule-widget basic ${toggleWidget && 'active'}`}>
            <button className="schedule-widget-button" onClick={handleToggle} />
            <div className="schedule-widget-calendar"></div>
            <div className="schedule-widget-customers-list">
              <CustomersList />
            </div>
          </div>
          <div className="schedule basic">
            <div className="schedule-header">
              <div className="schedule-header-date">
                <h2>Grudzień 15 - 21, 2019</h2>
                <div className="change-date-buttons">
                  <Icon name="left" />
                  <Icon name="right" />
                </div>
              </div>
              <div className="manage-schedule-buttons">
                <Button secondary>Pracownik</Button>
                <Button secondary>Dzień</Button>
                <Button rounded />
              </div>
            </div>
            <div className="schedule-wrapper">
              <ScheduleOneDayColumn />
              <ScheduleOneDayColumn />
              <ScheduleOneDayColumn />
              <ScheduleOneDayColumn />
              <ScheduleOneDayColumn />
              <ScheduleOneDayColumn />
              <ScheduleOneDayColumn />
            </div>
          </div>
        </StyledSchedule>
      </Layout>
    </App>
  );
}
