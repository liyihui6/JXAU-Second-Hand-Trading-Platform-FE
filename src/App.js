import React, {Component} from 'react';
import './App.css';
// import Home from './component/Home/Home'
// import UserCenter from './component/UserCenter/UserCenter'
// import Messages from './component/Messages/Messages'
import Router from './Router/RootRouter'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Home></Home>*/}
                {/*<UserCenter></UserCenter>*/}
                {/*<Messages></Messages>*/}
                <Router></Router>
            </div>
        );
    }
}

export default App;
