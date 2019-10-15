import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import theme from '../theme';

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="404: Not found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist&hellip; the sadness.</p>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
