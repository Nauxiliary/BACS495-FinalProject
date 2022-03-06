import React, { Component } from 'react';
import './Body.css';

export class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI(id) {
        fetch("http://localhost:9000/users/" + id)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() { 
        let welcome
        if (this.state.apiResponse !== "") {
            welcome = this.state.apiResponse;
        } else {
            welcome = "Please log in."
        }
        return <div className='body'>
            <div>
                <p onClick={ this.callAPI(1) }>Login</p>
            </div>
            <div>
                {welcome}
            </div>
        </div>;
    }
}

export default Body;