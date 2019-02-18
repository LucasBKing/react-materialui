import React, { Component } from 'react';
import { Header, Footer } from './Layouts/index'
import Exercises from './Exercises';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Exercises />
                <Footer />
            </div>
        );
    }
};

export default App;