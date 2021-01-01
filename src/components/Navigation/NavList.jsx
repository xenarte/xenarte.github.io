import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'gatsby';

function GetNavList(config) {
  const NavList = [
    {
      primaryText: 'Blogi',
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: '/',
    },
    {
      primaryText: 'Tietoa',
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: '/about/',
    },
    {
      primaryText: 'Galleria',
      leftIcon: <FontIcon>photo</FontIcon>,
      component: Link,
      to: '/galleria/',
    },
    {
      primaryText: 'Kasvutarina',
      leftIcon: <FontIcon>trending_up</FontIcon>,
      component: Link,
      to: '/kasvutarina/',
    },
    {
      primaryText: 'Koruista',
      leftIcon: <FontIcon iconClassName="fas fa-gem" />,
      component: Link,
      to: '/koruista/',
    },
    {
      primaryText: 'Tilaustyöt',
      leftIcon: <FontIcon>shopping_basket</FontIcon>,
      component: Link,
      to: '/tilaustyot/',
    },
    {
      primaryText: 'Arvot',
      leftIcon: <FontIcon>eco</FontIcon>,
      component: Link,
      to: '/arvot/',
    },
    {
      primaryText: 'Arvonnat',
      leftIcon: <FontIcon>emoji_events</FontIcon>,
      component: Link,
      to: '/arvonnat/',
    },
    {
      divider: true,
    },
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: 'a',
        href: link.url,
      });
    });
  }

  return NavList;
}
export default GetNavList;
