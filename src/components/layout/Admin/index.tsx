import React, { Component } from 'react';

export default function (ComposedComponent: any) {
  class Admin extends Component {
    render() {
      return (
        <>
          <ComposedComponent />
        </>
      );
    }
  }

  return Admin;
}
