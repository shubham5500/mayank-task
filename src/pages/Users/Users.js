import React, {Component} from 'react';
import './Users.scss';
import MainContent from "../../components/MainContent/MainContent";
import {fetchUtil} from "../../utils/helper";

class Users extends Component {

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        fetchUtil('users', {
            method: 'GET'
        }).then((data) => {
            console.log('-------------->', data)
        })
    }


    render() {
        return (
            <React.Fragment>
                <MainContent/>
            </React.Fragment>
        );
    }
}

export default Users;