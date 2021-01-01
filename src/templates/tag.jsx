import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import config from '../../data/SiteConfig';

const TagTemplate = ({ data, pageContext, location }) => (
  <Layout
    location={location}
    title={`Tagged in ${pageContext.tag.charAt(0).toUpperCase() +
      pageContext.tag.slice(1)}`}
  >
    <div className="tag-container">
      <Helmet>
        <title>{`Posts tagged as "${pageContext.tag}" | ${config.siteTitle}`}</title>
        <link
          rel="canonical"
          href={`${config.siteUrl}/tags/${pageContext.tag}`}
        />
      </Helmet>
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
);
export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
