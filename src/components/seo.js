import React from 'react';
import { Helmet } from 'react-helmet';

export default function Application() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Schedule</title>
      <meta name="description" content="Schedule application" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
