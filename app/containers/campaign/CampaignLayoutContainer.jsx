import React, { Component } from 'react';
import { Link } from 'react-router';

class CampaignLayoutContainer extends Component {
  render() {
    return (
      <div>
        <nav  className="header campaign">
          <Link to="/">Home</Link>
          <Link to="/campaign/One">活動1</Link>
          <Link to="/campaign/Two">活動2</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default CampaignLayoutContainer;
