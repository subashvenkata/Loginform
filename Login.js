import React, { Component } from 'react'
import './login.css'
import {
    BrowserRouter as Router,Route,NavLink,Switch,Redirect
  } from 'react-router-dom'
  import Register from '../Component/register'





class Login extends Component {
    State = {
        UserName:"",
        password:""
    }
    Change = e => {
        this.setState({
            [e.target.name]: e.target.Value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit()
        console.log(this.State)
    }
    render() {
        return (
            <Router>
           
            <div className="h1">
                <h1>Login</h1>
                <div className="Login">

                    <input name="UserName" palceholder="UserName" value={this.State.UserName}
                        onChange={e => this.Change(e)} /><br /><br />
                    <input name="Password" palceholder="Password" value={this.State.password}
                        onChange={e => this.Change(e)} /><br /><br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button><br/><br/>
                    <p>Not Register please Register Below</p>
                    < NavLink to ="/Register " target="_blank">Register  </NavLink>
                    <Route path="/Register " component={Register}/>
                
                </div>
                
            </div>
            </Router>
           
        )
    }
}
export default Login;
// this is the test message 
