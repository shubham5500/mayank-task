import React from 'react';
import './SideNav.scss'

const SideNav = ({toggleState, children}) => {
    return (
        <div className={`wrapper ${toggleState ? 'active' : ''}`}>
            <div className={'sidebar-wrapper'}>
                <nav>
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <a href="#home"><span className="fas fa-home solo">Home</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    );
}

export default SideNav;