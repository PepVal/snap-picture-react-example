import React from 'react';

//components
import NoImages from '../errors/NoImages';
import Image from './Image';

class Gallery extends React.Component{
  render(){

    const results = this.props.data; 
    
    return(<>
      <div>
        <ul>
          { results.length > 0 
            ? results.map((item, i) => {
                return(
                  <Image image={item} key={i}/>
                )
              })
            : null
          }
        </ul>
        { results.length == 0
          ? <NoImages />
          : null
        }
      </div>
    </>)
  }
}

export default Gallery;
