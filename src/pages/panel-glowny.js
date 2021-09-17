import React from 'react';
import styled from 'styled-components';
import App from '../components/app';
import Layout from '../components/layout';

const StyledDashboard = styled.main`
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;

  .dashboard-header {
    height: 70px;
  }

  .dashboard-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    gap: 20px;
  }
`;

export default function Dashboard() {
  return (
    <App>
      <Layout loggedIn>
        <StyledDashboard>
          <div className="dashboard-header basic"></div>
          <div className="dashboard-main">
            <div className="dashboard-visits basic"></div>
            <div className="dashboard-customers basic"></div>
          </div>
        </StyledDashboard>
      </Layout>
    </App>
  );
}
