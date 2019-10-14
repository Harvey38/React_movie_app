import React, { Component } from "react";
class Loginform extends React.Component{
    constructor(){
        super();
        this.state={
        email:"",
        password:""
    };
    }
    handleEmailChange = (event) => this.setState({ email: event.target.value });
    handlePasswordChange = (event) => this.setState({ password: event.target.value });
    handleLogin=(event)=>{
        // event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);  
    }
    render(){
        const { email, password } = this.state;
        const isEnabled = email.length > 0 && password.length > 0;
    return (
        <div className="container">
        <form>
            <div className="form-group">
                <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
                <button type="submit" disabled={!isEnabled} className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
        </form>
        </div>
    );
    }
};
export default Loginform;
