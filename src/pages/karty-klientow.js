import React from 'react';
import styled from 'styled-components';
import App from '../components/app';
import Layout from '../components/layout';

export default function CustomerCards() {
  return (
    <Layout loggedIn>
      <App></App>
    </Layout>
  );
}
