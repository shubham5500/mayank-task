import React from 'react';
import './SideNav.scss'
import {Link} from "react-router-dom";

const SideNav = ({toggleState, children}) => {
    return (
        <div className={`wrapper ${toggleState ? 'active' : ''}`}>
            <div className={'sidebar-wrapper'}>
                <nav>
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand d-flex flex-wrap align-items-center w-100">
                            <Link to="/users">
                                <i className="fas fa-users solo mx-3"/>Users
                            </Link>
                        </li>
                        <li className="sidebar-brand d-flex flex-wrap align-items-center w-100">
                            <Link to="/organisations"><i className="fas fa-building mx-3"/>Organisations</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    );
}

export default SideNav;