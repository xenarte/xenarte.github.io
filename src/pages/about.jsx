import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About';
import config from '../../data/SiteConfig';

const AboutPage = () => (
  <Layout title="Tietoa">
    <div className="about-container">
      <Helmet>
        <title>{`Tietoa | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <About />
    </div>
  </Layout>
);

export default AboutPage;
