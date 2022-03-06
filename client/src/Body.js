import React, { useState } from 'react';
import './Body.css';

function Body() {
    const [loginMessage, setLoginMessage] = useState("Not Logged In.");

    const toggleButtonState = (id) => {
        fetch("http://localhost:9000/users/" + id)
            .then((response) => response.json())
            .then((response) => {
                setLoginMessage(response + " is logged in.");
            })
            .catch(() => {
                setLoginMessage("No User Found.");
            });
    };

    return (
        <div className='body'>
            <div>
                <button onClick={toggleButtonState.bind(this, 1)}> Log In </button>
            </div>
            <div>
                <p> {loginMessage} </p>
            </div>
        </div>);

}

export default Body;