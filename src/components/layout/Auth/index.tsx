import React, { Component } from 'react';

export default function (ComposedComponent: any) {
  class Auth extends Component {
    render() {
      return (
        <>
          <ComposedComponent />
        </>
      );
    }
  }

  return Auth;
}
