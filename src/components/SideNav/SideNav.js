import React from 'react';
import './SideNav.scss'
import {Link} from "react-router-dom";

const SideNav = ({toggleState, children}) => {
    return (
        <div className={`wrapper ${toggleState ? 'active' : ''}`}>
            <div className={'sidebar-wrapper'}>
                <nav>
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <Link to="/users"><span className="fas fa-users solo">Users</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    );
}

export default SideNav;