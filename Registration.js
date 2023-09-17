import React, {Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export class Registration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Username:'',
      Email:'',
      Password:'',
      ConfirmPassword:''
    }
  }
 
  handlerUsername =(event)=>{
      this.setState({
        [event.target.name]:event.target.value

      })
  }
  handlerEmail =(event)=>{
      this.setState({
      
        [event.target.name]:event.target.value
      })
  }
  handlerPassword=(event)=>{
      this.setState({
       
        [event.target.name]:event.target.value
      })
  }
  handlerConfirmPassword=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
}

  handlerSubmit=(event)=>{
    event.preventDefault()
      console.log(this.state)
    
      Axios.post('http://localhost:3000/Registration',this.state)
      .then(Response=>{
        console.log(Response);
      })
      .catch(error =>{
        console.log("something went wrong here")
      })
          
      }     
render() {
  return (
    <>
      <center>
        <section className="Registration">
          <div className="container mt-5">
            <div className="Registration-content">
              <div className="Registration-form">
                <h2 className="form-title">Registration</h2>
                <div className="mt-4" />
                <div className="register-from" id="register-form"/>
                <form onSubmit={ this.handlerSubmit}>
                  <div className="from-group">
                    <label htmlFor="name"></label>
                    <b>Username:</b>{" "}
                    <input
                      type="text"
                      className="col-form-label"
                      name="Username"
                      id="email"
                      autoComplete="off"
                      size={50}
                      placeholder="Username"
                      value={this.state.Username}
                      onChange={this.handlerUsername}/>
                     
                 
                  </div>
                  <br></br>
                  <div className="from-group">
                    <label htmlFor="name"></label>
                    <b>Email:</b>{" "}
                    <input
                      type="text"
                      className="col-form-label"
                      name="Email"
                      id="email"
                      autoComplete="off"
                      size={50}
                      placeholder="email"
                      value={this.state.Email}
                      onChange={this.handlerEmail }
                    />
                  </div>
                  <br></br>
                  <div className="from-group">
                    <label htmlFor="name"></label>
                    <b>Password:</b>{" "}
                    <input
                      type="text"
                      className="col-form-label"
                      id="email"
                      autoComplete="off"
                      size={50}
                      placeholder="Password"
                      name="Password"
                      value={this.state.Password}
                      onChange={this.handlerPassword}
                    />
                  </div>
                  <br></br>
                  <div className="from-group">
                    <label htmlFor="name"></label>
                    <b>Confirm Password:</b>{" "}
                    <input
                      type="text"
                      className="col-form-label"
                      id="email"
                      autoComplete="off"
                      size={50}
                      placeholder="Confirm Password"
                      name="ConfirmPassword"
                      value={this.state.ConfirmPassword}
                      onChange={this.handlerConfirmPassword}
                      
                    />
                  </div>
                  <br></br>
   
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => this.handlerSubmit("/Registration")}
                  >
                    Register
                    </button>
                  <br></br>
                  <br></br>
                  <b>
                    Already Registered!<Link to="/">Login</Link>
                  </b>
                </form>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>

  )
};
};


export default Registration;
