import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';
//import '../App.css';
import Card from 'react-bootstrap/Card';

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      window.location.reload(false);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message)
      {
        setLoginStatus(response.data.message);
      }else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login")
      .then((response) => {
        if(response.data.loggedIn == true)
        {
          setLoginStatus(response.data.user[0].username);
        }
      });
  }, []);

  const logout = () => {
    Axios.post("http://localhost:3001/logout", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message)
      {
        setLoginStatus(response.data.message);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/logout")
      .then((response) => {
        if(response.data.loggedIn == false)
        {
          setLoginStatus(response.data.user[0].username);
        }
      });
  }, []);

  return (
      <div className="login">
        <br></br><br></br>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Card style={{ width: '20rem', height: '23rem' }}>
              <Card.Body>
                <Card.Title style={{textAlign: "center"}}>LOGIN</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "center"}}>Admin login here</Card.Subtitle>
                <Card.Text>
                  <div className="form">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" required="required"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" required="required"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}/>
                    </div>
                  </div>
                </Card.Text>
                <div class="form-group">
                    <Link to="/dashboard">
                        <button type="submit" className="btn btn-primary btn-block" onClick={login}>Log in</button>
                    </Link>
                </div>
                <div>
                  <p>{loginStatus}</p>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* <div className="col-3">
            <Card style={{ width: '20rem', height: '23rem' }}>
              <Card.Body>
                <Card.Title>REGISTER</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Didn't have an account? Register here</Card.Subtitle>
                <Card.Text>
                  <div className="form">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" required="required"
                      onChange={(e) => {
                        setUsernameReg(e.target.value);
                      }}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" required="required"
                      onChange={(e) => {
                        setPasswordReg(e.target.value);
                      }}/>
                    </div>
                  </div>
                </Card.Text>
                <div className="form-group">
                    <button type="submit" class="btn btn-primary btn-block" onClick={register}>Register</button>
                </div>
              </Card.Body>
            </Card>
          </div> */}
          <div className="col-4"> 
            {/* <button type="submit" class="btn btn-danger btn-block" onClick={logout}>Logout</button> */}
          </div>
        </div>
      </div>
  );
}