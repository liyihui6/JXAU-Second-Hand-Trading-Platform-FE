import React, {Component} from 'react';
import './App.css';
import Router from './Router/RootRouter'
import {Provider} from 'react-redux'
import store from './Redux/store'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router/>
                </div>
            </Provider>

        );
    }
}

export default App;
