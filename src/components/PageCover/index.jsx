import React, { Component } from 'react';
import ImageQuery from '../ImageQuery';
import PageCover from './PageCoverComponent';

const PageQueryWrapper = ({ coverFName, coverHeight, coverClassName }) => (
  <ImageQuery
    passTo={data => (
      <PageCover
        fileEdges={data.allFile.edges}
        coverFName={coverFName}
        coverHeight={coverHeight}
        coverClassName={coverClassName}
      />
    )}
  />
);

export default PageQueryWrapper;
