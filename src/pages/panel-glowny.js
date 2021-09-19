import React from 'react';
import styled from 'styled-components';
import App from '../components/app';
import CustomersList from '../components/customersList';
import Layout from '../components/layout';
import ScheduleOneDayColumn from '../components/scheduleOneDayColumn';

const StyledDashboard = styled.main`
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;

  .dashboard-header {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h2 {
      padding: 0 20px;
    }
  }

  .dashboard-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    gap: 20px;
  }

  .dashboard-visits {
    border: 10px solid var(--white);
    max-height: calc(100vh - 200px);

    .column {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  .dashboard-customers {
    /* display: grid; */
    border: 10px solid var(--white);
    max-height: calc(100vh - 200px);
  }
`;

export default function Dashboard() {
  return (
    <App>
      <Layout loggedIn>
        <StyledDashboard>
          <div className="dashboard-header basic">
            <h2>Cześć, user!</h2>
          </div>
          <div className="dashboard-main">
            <div className="dashboard-visits basic">
              <ScheduleOneDayColumn />
            </div>
            <div className="dashboard-customers basic">
              <CustomersList />
            </div>
          </div>
        </StyledDashboard>
      </Layout>
    </App>
  );
}
