import './App.scss';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import Users from "./pages/Users/Users";
import Organisations from "./pages/Organisations/Organisations";

function App() {
    const [navToggle, setNavToggle] = useState(false)

    return (
        <Router>
            <div className="App">
                <NavigationBar toggle={() => setNavToggle(!navToggle)}/>
                <SideNav toggleState={navToggle}
                         children={<Switch>
                             <Route path="/users">
                                 <Users/>
                             </Route>
                             <Route path="/organisations">
                                 <Organisations/>
                             </Route>
                         </Switch>}/>
            </div>
        </Router>)

}

export default App;