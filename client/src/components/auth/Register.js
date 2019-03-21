import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Login.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to market
    if (this.props.auth.isAuthenticated) {
      // To bring user to their market, we need the route to specify their market id. I changed it to redirect to home page for now.
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card gardenCard">
              <div className="card-header gardenCardHeader">
                <h2 className="gardenHeader">REGISTER</h2>
              </div>
              <div className="card-body gardenCardBody">
                <h5 className="card-title gardenCardTitle">
                  Already have an account? &nbsp; <Link to="/login" className="registerLink">LOGIN</Link>
                </h5>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="emailDiv">
                    <label htmlFor="name" className="label">Name</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        invalid: errors.name
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div className="emailDiv">
                    <label htmlFor="email" className="label">Email</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("form-control form-control-lg", {
                        invalid: errors.email
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div className="passwordDiv">
                    <label htmlFor="password" className="label">Password</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        invalid: errors.password
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="passwordDiv">
                    <label htmlFor="password2" className="label">Confirm Password</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        invalid: errors.password2
                      })}
                    />
                    <span className="red-text">{errors.password2}</span>
                  </div>
                  <div className="gardenBtnDiv">
                    <button type="submit" className="btn btn-dark gardenBtn">REGISTER</button>
                  </div>
                </form>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));