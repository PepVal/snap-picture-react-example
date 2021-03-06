import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// import app components
import Header from './components/Header';
import Initial from './components/Initial';
import Mountain from './components/nav/Mountain';
import Beach from './components/nav/Beach';
import Bird from './components/nav/Bird';
import Food from './components/nav/Food';
import Search from './components/search/Search';
import NotFound from './components/errors/NotFound';

class App extends React.Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  render() {
    return (
      <HashRouter >
        <div className="container">
          <Route render={props => <Header handleSubmit={this.handleSubmit} history={props.history} />} />
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route path="/mountain" render={() => <Mountain searchTerm="mountain" />} />
            <Route path="/beach" render={() => <Beach searchTerm="beach" />} />
            <Route path="/bird" render={() => <Bird searchTerm="bird" />} />
            <Route path="/food" render={() => <Food searchTerm="food" />} />
            <Route path="/search/:searchInput" render={(props) => <Search searchTerm={props.match.params.searchInput} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
