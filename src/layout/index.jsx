import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import config from '../../data/SiteConfig';
import './index.scss';
import './global.scss';

const MainLayout = ({ children, title }) => (
  <Navigation config={config} LocalTitle={title}>
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      {children}
    </div>
  </Navigation>
);

export default MainLayout;
