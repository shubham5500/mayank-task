import './App.scss';
import SideNav from "./components/SideNav/SideNav";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navToggle: false
        }
    }

    toggleNav = () => {
        console.log('asda')
        this.setState((state) => {
            const {navToggle} = state;
            return {
                ...state,
                navToggle: !navToggle
            }
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        const {toggleNav, state: {navToggle}} = this;
        return (
            <div className="App">
                <NavigationBar toggle={toggleNav}/>
                <SideNav toggleState={navToggle}/>
            </div>
        )
    }
}

export default App;
