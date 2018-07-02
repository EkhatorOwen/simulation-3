import React, { Component } from 'react'
import './Auth.css'

export default class Auth extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      passowrd: ''
    }
  }

  handleUnameChange=(value)=>{
    this.setState({username: value})
  }

  handlePasswordChange=(value)=>{
      this.setState({passowrd: value})
  }

  render() {
    return (
     

      <div className="auth">
        <div className="auth-box">
        
          <div className="auth-logo">
            <img src="https://image.flaticon.com/icons/svg/311/311525.svg" height="100" width="100" />
          </div>
          <div className="auth-title">
              <h1>Helo</h1>
          </div>
          <div className="auth-input">


            <div className="auth-input-user">
                <label>Username: </label> <input onChange={e=>this.handleUnameChange(e.target.value)} type="text"/>
            </div>

            <div className="auth-input-pass">
              <label>Password: </label> <input onChange={e=>this.handlePasswordChange(e.target.value)} type="password"/>
            </div>

          </div>
            <div className="auth-buttons">
            <button  className="button button1">Login</button>
            <button className="button button1">Register</button>
          </div>

        </div>
      </div>
      
    )
  }
}
