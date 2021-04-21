import React from 'react';
import {Navbar} from 'react-bootstrap';
import './NavigationBar.scss'

const NavigationBar = ({toggle}) => {
    return (
        <Navbar bg="light" variant="dark">
            <i className={`fas fa-bars fa-2x mr-3 cursor-pointer`} onClick={toggle}/>
            <Navbar.Brand className={'text-dark'} href="#home"><i className={`fab fa-github fa-2x mr-3 cursor-pointer`}/></Navbar.Brand>
            <div className={'ml-auto'}>
                <i className="fas fa-bell fa-2x"/>
            </div>
        </Navbar>
    );
}

export default NavigationBar;