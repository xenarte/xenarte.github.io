import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'gatsby';
import moment from 'moment';
import _ from 'lodash';
import config from '../../../data/SiteConfig';
import './PostInfo.scss';

const linkCategories = categories => (
  <>
    {categories.map((category, idx) => (
      <Link
        key={idx}
        className="category-link"
        to={`/categories/${_.kebabCase(category)}`}
      >
        {category}
      </Link>
    ))}
  </>
);

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Julkaistu ${moment(postNode.fields.date).format(
            config.dateFormat
          )}`}
          subtitle={`${postNode.timeToRead} min lukemista`}
        />
        <CardTitle
          avatar={
            <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
          }
          title="Ryhmissä"
          subtitle={linkCategories(post.categories)}
        />
      </div>
    );
  }
}

export default PostInfo;
