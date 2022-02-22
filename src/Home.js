import React, { Component } from 'react';

class Home extends Component {
    componentWillUnmount(){
        alert('unmounting')
    }
    render() {
        return (
            <div>
                <h1>this is home component</h1>
            </div>
        );
    }
}

export default Home;