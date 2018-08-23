import React, { Component } from 'react';
import './App.css'
import { Provider } from 'react-redux';
import EventFormComponent from './components/EventFormComponent';

import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Event form</h1>
                    </header>
                        <EventFormComponent/>
                </div>
            </Provider>
        );
    }
}

export default App;
