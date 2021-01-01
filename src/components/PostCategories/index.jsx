import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Chip from "react-md/lib/Chips";
import "./PostCategories.scss";

class PostCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="post-category-container">
        {categories &&
          categories.map(category => (
            <Link
              key={category}
              style={{ textDecoration: "none" }}
              to={`/categories/${_.kebabCase(category)}`}
            >
              <Chip label={category} className="post-preview-categories" />
            </Link>
          ))}
      </div>
    );
  }
}

export default PostCategories;
