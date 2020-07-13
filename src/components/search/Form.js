import React from 'react';
import SearchButton from './SearchButton';

class Form extends React.Component {

  state = {
    searchEntry: ''
  }

  // update search text state
  updateSearchInput = (e) => {
    this.setState({
      searchEntry: e.target.value
    });
  }

  render() {
    let searchInput= this.state.searchEntry;
    let history = this.props.history;
    return (
      <form className="search-form"
       onSubmit={ e => this.props.handleSubmit(e, history, searchInput)}>

        <SearchButton style={"search-button"}/>

        <input  type="text"
          name="search"
          placeholder="Search..."
          onChange={this.updateSearchInput}
          />
      </form>
    );
  }
}

export default Form;
