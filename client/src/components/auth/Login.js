import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to market
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/market");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/newmarket"); // push user to newmarket when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card loginCard">
              <div className="card-header">
                <h2 className="loginHeader">LOGIN</h2>
              </div>
              <div className="card-body loginCardBody">
                <h5 className="card-title loginCardTitle">
                  Don't have an account? <Link to="/register" className="registerLink">REGISTER</Link>
                </h5>
                <form noValidate onSubmit={this.onSubmit}>
                  <div>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("form-control form-control-lg emailInput", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                    />
                    <label htmlFor="email">Email</label>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>
                  <div>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("form-control form-control-lg passwordInput", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <label htmlFor="password">Password</label>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div className="loginBtnDiv">
                    <button type="submit" className="btn btn-primary loginBtn">Login</button>
                  </div>
                </form>
              </div>
            </div>




            {/* <div className="col-md-8">
              <h4>
                <b>Login</b> below
              </h4>

            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);