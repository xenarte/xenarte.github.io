import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import UserLinks from '../components/UserLinks';
import PageCover from '../components/PageCover';
import Helmet from 'react-helmet';
import Layout from './index';
import config from '../../data/SiteConfig';
import './page.scss';

const Page = ({ location, title, imageSrc, children }) => {
  const pageTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const pageTitleLower = title.toLowerCase();

  // Check templates/post.jsx and alter mobile state-check for hooks here
  const coverHeight = 320;
  return (
    <Layout title={pageTitle}>
      <div className={`${pageTitleLower}-page-container`}>
        <Helmet>
          <title>{`${pageTitle} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/${pageTitleLower}/`} />
        </Helmet>
        <div className="md-grid mobile-fix">
          <Card className="md-grid md-cell--8">
            <div className={`page-wrapper ${pageTitleLower}-page-wrapper`}>
              {!!imageSrc && (
                <PageCover
                  coverFName={imageSrc}
                  coverHeight={coverHeight}
                  coverClassName={`page-cover ${pageTitleLower}-img`}
                />
              )}
              <CardText className="page-text md-body-1">{children}</CardText>
              <UserLinks labeled config={config} />
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
