import React, { Component } from 'react';
import ImageQuery from '../ImageQuery';
import PostCover from './PostCoverComponent';

const PostQueryWrapper = ({ postNode, coverHeight, coverClassName }) => (
  <ImageQuery
    passTo={data => (
      <PostCover
        fileEdges={data.allFile.edges}
        postNode={postNode}
        coverHeight={coverHeight}
        coverClassName={coverClassName}
      />
    )}
  />
);

export default PostQueryWrapper;
