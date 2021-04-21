import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const MainContent = (props) => {
    return (
        <div className={'page-content-wrapper'}>
            <div className="page-content">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=1ec38c7fb91d3f079554">Click here</a>

                                </div>
                                <div className="panel-body">
                                    content body
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    Panel 1
                                </div>
                                <div className="panel-body">
                                    content body
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default MainContent;