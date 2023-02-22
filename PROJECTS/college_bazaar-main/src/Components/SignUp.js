import React , {  useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function SignUp() {
  const [email,setEmail]= useState('');
  const navigate = useNavigate();
  const [password,setPassword]= useState('');
  const signIn=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth);
    if (auth){
      navigate('/')
    }
    })
    .catch(error=>alert(error.message))
  }

  return (
    <div className="container" id="cont">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <Link to="/" style={{ textDecoration: "None" }}>
                    <a className="navbar-brand navi" id="logo" href="#!">
                      <h1 className="primary">
                        <strong>C</strong>ollege <strong>B</strong>azaar
                      </h1>
                    </a>
                  </Link>
                </div>

                <div className="form-outline mb-4 my-3">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid College email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label className="form-label my-2 " for="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label className="form-label my-2" for="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                  onClick={signIn}
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingleft: `2.5rem`, paddingright: `2.5rem` }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/login" style={{ textDecoration: "None" }}>
                      <a href="#!" className="link-danger">
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
