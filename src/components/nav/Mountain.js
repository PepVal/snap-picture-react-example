import React from 'react';
import Container from '../gallery/Container';

class Mountain extends React.Component {

  render(){
    return(<>
      <div className="gallery-containt">
        <h2>{this.props.searchTerm} Pictures</h2>
        <Container searchTerm={this.props.searchTerm} />
      </div>
    </>)
  }
}

export default Mountain; 
