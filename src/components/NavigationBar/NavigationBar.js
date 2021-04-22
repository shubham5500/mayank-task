import React, {useEffect, useState} from 'react';
import {Navbar} from 'react-bootstrap';
import './NavigationBar.scss'
import {CLIENT_ID, CLIENT_SECRET} from "../../utils/variable";
import {fetchUtil} from "../../utils/helper";

const NavigationBar = ({toggle}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetchUtil('user', {
            method: 'GET'
        }).then((data) => {
            setUser(data);
        })
    }, []);
    const spitValue = !!user ? user.name.split(' ') : '';
    let nameInitials = null;
    if (spitValue) {
        nameInitials = spitValue ? `${spitValue[0].charAt(0)} ${spitValue[spitValue.length-1].charAt(0)}` : '';
    }

    return (
        <Navbar bg="light" variant="dark" fixed={'top'}>
            <i className={`fas fa-bars fa-2x mr-3 cursor-pointer`} onClick={toggle}/>
            <Navbar.Brand className={'text-dark'} href="#home">
                <i className={`fab fa-github fa-2x mr-3 cursor-pointer`}/>
            </Navbar.Brand>
            <div className={'ml-auto d-flex align-items-center'}>
                {!user ? <i className="fas fa-sign-in-alt fa-2x mr-3 cursor-pointer" onClick={() => {
                    window.location.href = `https://github.com/login/oauth/authorize?scope=user&users&email&repo&notifications&public_repo&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
                }}/>: <div className={'name-circle mx-3'}>{nameInitials}</div>}
                <i className="fas fa-bell fa-2x"/>
            </div>
        </Navbar>
    );
}

export default NavigationBar;
// &client_secret=01e0f38268ede9a5a756b40006de31ba2496cf92