import React, {Component} from 'react';
import './Organisations.scss';
import MainContent from "../../components/MainContent/MainContent";
import {fetchUtil} from "../../utils/helper";
import {Col, Row, Table} from "react-bootstrap";

class Organisations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: []
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        fetchUtil('organizations', {
            method: 'GET'
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    organizations: data
                }
            })
        })
    }


    render() {
        const {state: {organizations}} = this;
        return (
            <React.Fragment>
                <MainContent>
                    <h4 className={'my-3'}>Organisation</h4>
                    <Row>
                        <Col md={12}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Repos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    organizations && organizations.length > 0 && organizations.map((organization) => (<tr>
                                        <td>
                                            <div>
                                                <img  className="avatar avatar-xs rounded-circle"
                                                      alt="Image placeholder" src={organization.avatar_url}
                                                      height={'48px'}
                                                      width={'48px'}/>
                                                <span className={'mx-3 text-capitalize'}>
                                                    {organization.login}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            {organization.name}
                                        </td>
                                        <td>{organization.description}</td>
                                        <td>
                                            <div className={'d-flex align-items-center'}>
                                                <span className={'fas fa-eye mx-3 cursor-pointer'} onClick={() => {
                                                    window.open(organization.repos_url, '_blank').focus();
                                                }}/>
                                                {organization.repos_url}
                                            </div>
                                        </td>
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

export default Organisations;