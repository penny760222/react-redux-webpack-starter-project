import React, { Component } from 'react';
import { Link } from 'react-router';

class MemberLayoutContainer extends Component {
  render() {
    return (
      <div >
        <nav className="sidebar">
          <Link to="/member">會員專區首頁</Link>
          <Link to="/member/account/list">會員子帳號管理</Link>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MemberLayoutContainer;
