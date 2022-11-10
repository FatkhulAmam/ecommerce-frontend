import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
  static get propTypes(){
    return {
      children: PropTypes.string
    }; 
  }
  render() {
    const isLogin = (localStorage.getItem("isLogin") ? localStorage.getItem("isLogin") : false)
    return (
      <Navigate
        render={(props) => {
          const childWithProps = React.Children.map(
            this.props.children,
            (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, props);
              }
              return child;
            }
          );
          if (isLogin) {
            return childWithProps;
          } else {
            return (
              <Navigate
                to={{
                  pathname: "/login",
                  state: { alert: "Login first!", color: "danger" },
                }}
              />
            );
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
