import React from 'react';
import cssClasses from './SideDrawerToggle.css';

const sideDrawerToggle = (props) => {
    return (
        <div className={cssClasses.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default sideDrawerToggle;