import React from "react";
import {Container} from "react-bootstrap";

const MainContent = ({children}) => {
    return (
        <div className={'page-content-wrapper'}>
            <div className="page-content">
                <Container fluid={true}>
                    {children}
                </Container>
            </div>
        </div>
    )
}
export default MainContent;