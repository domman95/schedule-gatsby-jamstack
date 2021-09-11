import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledDashboard = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;

  .welcomUser {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column: 1 / -1;
    font-size: 26px;
    padding: 20px 30px;
  }

  // TODO: today's visits and fav castomers
`;

export default function Dashboard() {
  return (
    <>
      <Layout loggedIn>
        <StyledDashboard>
          <div className="welcomUser basicComponentsStyle">Cześć, user!</div>
          <div className="todaysVisits basicComponentsStyle">
            Today's visits!
          </div>
          <div className="favouriteCustomers basicComponentsStyle">
            Favourite customers!
          </div>
        </StyledDashboard>
      </Layout>
    </>
  );
}
