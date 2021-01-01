import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import './UserLinks.scss';

const getLinkElements = (userLinks, labeled) =>
  userLinks.map(link => (
    <Button
      icon={!labeled}
      flat={labeled}
      secondary
      key={link.label}
      iconClassName={link.iconClassName}
      href={link.url}
    >
      {labeled ? link.label : ''}
    </Button>
  ));

const UserLinks = ({ config: { userLinks }, labeled }) =>
  !userLinks ? null : (
    <div className="user-links">{getLinkElements(userLinks, labeled)}</div>
  );

export default UserLinks;
