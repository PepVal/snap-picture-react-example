import React from 'react';
import logo from '../logo.svg'

class Initial extends React.Component{
  render(){
    return(<>   
      <p>Enter a search term or click a link to browse images.</p>
      <img className="logo" width={250} height={250} src={logo}/>
      <p>Created with React.js, React Router, Axios and Pixabay Api </p>
    </>)
  }
}

export default Initial;
