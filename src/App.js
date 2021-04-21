import './App.scss';
import SideNav from "./components/SideNav/SideNav";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {Component} from "react";
import Home from "./pages/Home/Home";
import {fetchUtil} from "./utils/helper";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navToggle: false
        }
    }

    componentDidMount() {
        this.getUser();
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

    getUser = () => {
        fetchUtil('users', {
            method: 'GET'
        }).then((data) => {
            console.log('-------------->', data)
        })
    }

    render() {
        const {toggleNav, state: {navToggle}} = this;
        return (
            <div className="App">
                <NavigationBar toggle={toggleNav}/>
                <Home toggleState={navToggle}/>
            </div>
        )
    }
}

export default App;