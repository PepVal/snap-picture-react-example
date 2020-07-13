import React from 'react';

import Form from './search/Form';
import Navigation from './nav/Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="h1-custom">SnapPicture &trade;</h1> 
        <Navigation />
        <Form history={this.props.history} handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default Header;
