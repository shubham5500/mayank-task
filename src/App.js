import './App.scss';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import Users from "./pages/Users/Users";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navToggle: false
        }
    }

    toggleNav = () => {
        this.setState((state) => {
            const {navToggle} = state;
            return {
                ...state,
                navToggle: !navToggle
            }
        })
    }

    render() {
        const {toggleNav, state: {navToggle}} = this;
        return (
            <Router>
                <div className="App">
                    <NavigationBar toggle={toggleNav}/>
                    <SideNav toggleState={navToggle}
                             children={<Switch>
                                 <Route path="/users">
                                     <Users/>
                                 </Route>
                             </Switch>}/>
                </div>
            </Router>
        )
    }
}

export default App;