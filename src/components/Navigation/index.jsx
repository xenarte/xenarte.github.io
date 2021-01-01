import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from '../ToolbarActions';
import Footer from '../Footer';
import GetNavList from './NavList';

const showUserLinks = title => title === 'Home';

const Navigation = ({ children, config, LocalTitle }) => (
  <NavigationDrawer
    drawerTitle={config.siteTitle}
    toolbarTitle={LocalTitle}
    contentClassName="main-content"
    navItems={GetNavList(config)}
    defaultVisible={false}
    autoclose={true}
    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
    toolbarClassName="xenarte-toolbar"
    toolbarActions={<ToolbarActions config={config} />}
  >
    <div className="main-container">{children}</div>
    <Footer userLinks={showUserLinks(LocalTitle)} />
  </NavigationDrawer>
);

export default Navigation;
