import React from 'react';
import './SideNav.scss'
import MainContent from "../MainContent/MainContent";

const SideNav = ({toggleState}) => {
    return (
        <div id={`wrapper`} className={`${toggleState ? 'active' : ''}`}>
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <a href="#home"><span className="fa fa-home solo">Home</span></a>
                        </li>
                        <li>
                            <a href="#anch1">
                                <span className="fa fa-anchor solo">Anchor 1</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch2">
                                <span className="fa fa-anchor solo">Anchor 2</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch3">
                                <span className="fa fa-anchor solo">Anchor 3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch4">
                                <span className="fa fa-anchor solo">Anchor 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <MainContent/>
        </div>
    );
}

export default SideNav;