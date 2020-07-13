import React from 'react';
import Container from '../gallery/Container';

const Chihuly = (props) => {
  return (
    <div className="gallery-containt">
      <h2>{props.searchTerm} Pictures</h2>
      <Container searchTerm={props.searchTerm} />
    </div>
  );
}

export default Chihuly;
