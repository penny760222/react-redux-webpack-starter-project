import React, { Component } from 'react';
import { Link } from 'react-router';

class BaseLayoutContainer extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/campaign">活動列表</Link>
          <Link to="/member">會員專區</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayoutContainer;
