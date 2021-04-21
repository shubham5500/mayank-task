import React, {Component} from 'react';
import './Home.scss';
import SideNav from "../../components/SideNav/SideNav";
import MainContent from "../../components/MainContent/MainContent";

class Home extends Component {
    render() {
        const {props: {toggleState}} = this;
        return (
            <React.Fragment>
                <SideNav toggleState={toggleState}>
                    <MainContent/>
                </SideNav>
            </React.Fragment>
        );
    }
}

export default Home;