import React, {Component} from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import './NavigationBar.scss'
const NavigationBar = ({toggle}) => {
        return (
            <Navbar bg="light" variant="dark">
                <i className={`fas fa-bars fa-2x mr-3`} onClick={toggle}/>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <div className={'ml-auto'}>
                    <i className="fas fa-bell fa-2x"/>
                </div>
            </Navbar>
        );
}

export default NavigationBar;