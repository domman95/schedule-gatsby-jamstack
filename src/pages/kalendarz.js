import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledSchedule = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;

  .calendar,
  .listOfCustomers {
    max-width: 560px;
    width: 460px;
  }

  .scheduleContainer {
    grid-column: 2 / -1;
    grid-row: 1 / 3;
  }
`;

export default function Schedule() {
  return (
    <Layout loggedIn>
      <StyledSchedule>
        <div className="calendar basicComponentsStyle">calendar</div>
        <div className="listOfCustomers basicComponentsStyle">
          list of customers
        </div>
        <div className="scheduleContainer basicComponentsStyle">
          schedule container
        </div>
      </StyledSchedule>
    </Layout>
  );
}
