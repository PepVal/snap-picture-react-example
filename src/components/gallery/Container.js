import React from 'react';
import axios from 'axios';
import { apiKey } from '../../api/config';

// import app components
import Gallery from './Gallery';
import Loader from './Loader';

class Container extends React.Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true
    }
  }

  // load images
  componentDidMount() {
    this.runSearch(this.props.searchTerm);
  }

  // load new images for new search
  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.runSearch(this.props.searchTerm);
    }
  }

  // fetch data
  runSearch = (query) => {
    const url_api_pixabay = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`;

    axios.get(url_api_pixabay)
      .then(response => {
        this.setState({
          images: response.data.hits,
          loading: false
        });
      })
      .catch(error => {
        console.log('We have an error with fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="photo-container">
        {
          (this.state.loading)
            ? <Loader />
            : <Gallery data={this.state.images} />
        }
      </div>
    );
  }
}

export default Container;
