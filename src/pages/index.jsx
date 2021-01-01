import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

const Index = ({ data }) => (
  <Layout title="Blogi">
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEO postEdges={data.allMarkdownRemark.edges} />
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
);

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "YYYY-MM-DD")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`;
