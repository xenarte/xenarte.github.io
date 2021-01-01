import React, { Component } from 'react';
import Img from 'gatsby-image';
import path from 'path';
import './PageCover.scss';

class PageCover extends Component {
  render() {
    const { fileEdges, coverFName, coverHeight, coverClassName } = this.props;
    const coverNodeList = fileEdges.filter(fileNode => {
      if (fileNode.node.childImageSharp === null) return false;

      if (
        fileNode.node.absolutePath.indexOf(
          path.join('/images/', coverFName)
        ) !== -1
      )
        return true;

      return false;
    });

    if (coverNodeList.length === 1) {
      return (
        <Img
          fluid={coverNodeList[0].node.childImageSharp.fluid}
          className={coverClassName}
          style={{ height: coverHeight, width: '100%' }}
        />
      );
    }

    return null;
  }
}

export default PageCover;
