import React, {Component} from 'react';
import './Users.scss';
import MainContent from "../../components/MainContent/MainContent";
import {fetchUtil} from "../../utils/helper";
import {Col, Row, Table} from "react-bootstrap";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        fetchUtil('users', {
            method: 'GET'
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    users: data
                }
            })
        })
    }


    render() {
        const {state: {users}} = this;
        return (
            <React.Fragment>
                <MainContent>
                    <h4 className={'my-3'}>Users</h4>
                    <Row>
                        <Col md={12}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th className={'text-center'}>#</th>
                                    <th>Login</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Email</th>
                                    <th>Public Repos</th>
                                    <th>Private Repos</th>
                                    <th>Followers</th>
                                    <th>Following</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users && users.length > 0 && users.map((user, i) => (<tr>
                                        <td className={'text-center'}>{i + 1}</td>
                                        <td>
                                            <div>
                                                <img className="avatar avatar-xs rounded-circle"
                                                     alt="Image placeholder" src={user.avatar_url}
                                                     height={'48px'}
                                                     width={'48px'}/>
                                                <span className={'mx-3 text-capitalize'}>
                                                    {user.login}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>{user.company}</td>
                                        <td>{user.location}</td>
                                        <td>{user.email}</td>
                                        <td>{user.public_repos}</td>
                                        <td>{user.private_repos}</td>
                                        <td>{user.followers}</td>
                                        <td>{user.following}</td>
                                    </tr>))
                                }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </MainContent>
            </React.Fragment>
        );
    }
}

export default Users;