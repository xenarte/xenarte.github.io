import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ImageQuery = ({ passTo }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              id
              absolutePath
              childImageSharp {
                id
                resolutions {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                }
                internal {
                  contentDigest
                  type
                  owner
                }
                fluid(maxWidth: 1240) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={passTo}
  />
);

export default ImageQuery;
