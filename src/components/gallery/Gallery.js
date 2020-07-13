import React from 'react';
import NoImages from '../errors/NoImages';
import Image from './Image';


const Gallery = (props) => {
  const results = props.data;
  let images;
  let noImages;

// map variables
  if (results.length > 0) {
    images = results.map(image => {
      let id = image.id;
      let webformatURL = image.webformatURL;
      let tags = image.tags;
      let likes = image.likes;
      let user = image.user;
      let downloads = image.downloads;

      return <Image url={webformatURL} key={id} alt={tags} likes={likes} user_name={user} downloads={downloads} />
    });
  } else {
    noImages = <NoImages />   // return 'not found' component if no images fetched
  }

  return (
    <div>
      <ul>
        { images }
      </ul>
      { noImages }
    </div>
  );
};



export default Gallery;
