import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import config from '../../data/SiteConfig';

const CategoryTemplate = ({ data, pageContext, location }) => (
  <Layout
    location={location}
    title={
      pageContext.category.charAt(0).toUpperCase() +
      pageContext.category.slice(1)
    }
  >
    <div className="category-container">
      <Helmet>
        <title>
          {`Posts in category "${pageContext.category}" | ${config.siteTitle}`}
        </title>
        <link
          rel="canonical"
          href={`${config.siteUrl}/categories/${pageContext.category}`}
        />
      </Helmet>
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
);

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
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
