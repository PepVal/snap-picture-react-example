import React from 'react';
import Container from '../gallery/Container';

const Search = (props) => {
  return (
    <div className="gallery-containt">
      <h2>{ props.searchTerm } Images</h2>
      <Container searchTerm={ props.searchTerm } />
    </div>
  );
};

export default Search;
