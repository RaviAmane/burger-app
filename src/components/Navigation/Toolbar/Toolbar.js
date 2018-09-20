import React from 'react';
import cssClasses from './Toolbar.css';
import Logo from './../../../components/Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import SideDrawerToggle from './../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <SideDrawerToggle clicked={props.sideDrawerToggle}/>
        <div className={cssClasses.Logo}>
            <Logo />
        </div>
        <nav className={cssClasses.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;