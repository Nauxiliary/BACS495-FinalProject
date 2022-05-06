import React, {Component} from 'react'

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            loggedInUser: '',

            userLogin: 0,

            registerUser: {
                username: '',
                password: 0
            }
            
        }
        
        this.handleLoginChange = this.handleLoginChange.bind(this)
        this.handleRegisterChange = this.handleRegisterChange.bind(this)
        this.addUser = this.addUser.bind(this)
        this.getUser = this.getUser.bind(this)
    }
    
    getUser() {
        var login = this.state.userLogin
        fetch('http://localhost:5000/users/'+ login)
        .then(res => res.json()).then(data => {
            this.setState({
                loggedInUser: data[0].username
            })
        })
    }

    handleRegisterChange(e) {
        this.setState({registerUser:{
            username: e.target.value
        }})
    }

    handleLoginChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addUser() {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state.registerUser)
        }).then(this.setState({registerUser:{username: '', password: 0}}))
    }

    


    render() {
        return (
            <div>
                <div>
                    <form onSubmit={(e) =>this.getUser(e)}>
                        <input type="text" id="loginname" name="userLogin" onChange={this.handleLoginChange} value={this.state.userLogin} /><br />
                        <button className="btn btn-danger" >Log In</button><br/>
                    </form>
                </div>
                <div>
                    <LoggedUserDisplay loggedInUser={this.state.loggedInUser}/>
                </div>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registerModal">
                    New User
                </button>

                
                <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="registerModalLabel">Register New User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="user">Enter Username</label>
                                <input type="text" id="user" name="user" value={this.state.registerUser.username} onChange={this.handleRegisterChange}/><br/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.addUser}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;

class LoggedUserDisplay extends React.Component {
    render(){
        return (
            <div>
                <p>Logged in as:</p><br/>
                {this.props.loggedInUser}
            </div>
        )
    }
}