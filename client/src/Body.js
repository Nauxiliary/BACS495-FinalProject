import React, { useState, useEffect } from 'react';
import './Body.css';
import UserRegistration from './Users/Register';
import UserDisplay from './Users/UserDisplay';

function Body() {
    const [loginMessage, setLoginMessage] = useState("Not Logged In.");
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [update])

    const rerender = () => {
        var newVal = update + 1;
        console.log(newVal);
        setUpdate(newVal);
    }

    return (
        <div className='body'>
            <div>
                <UserDisplay users={users}/>
                <UserRegistration notifyParent = {rerender}/>
            </div>
            <div>
                <p> {loginMessage} </p>
            </div>
        </div>);

}

export default Body;