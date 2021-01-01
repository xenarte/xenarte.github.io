import React from 'react';
import PostPreview from '../PostPreview';

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  const postList = getPostList();
  return (
    <div className="md-grid md-grid--no-spacing md-cell--middle">
      <div className="md-grid md-cell--8 mobile-fix">
        {postList.map(post => (
          <PostPreview key={post.title} postInfo={post} />
        ))}
      </div>
    </div>
  );
};

export default PostListing;
