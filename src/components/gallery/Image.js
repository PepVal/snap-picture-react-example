import React from 'react';

class Image extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isHigh: false, 
      colorStar: false,
    }
  }

  handleIsHigh(){
    this.setState({isHigh: !this.state.isHigh})
  }

  handleColorStar() {
    if(!this.state.colorStar){
      this.setState({colorStar: true})
      this.props.image.likes++
    }else{
      this.setState({colorStar: false})
      this.props.image.likes--
    }
  }

  render(){
    const {colorStar} = this.state
    const {image} = this.props
    return(<>
      <div className="card" >
        <li>
          <img className="photo" src={image.webformatURL} alt={image.tags} />
        </li>
        <div className="description">
          <div>
            <p className="username">{image.user}</p>
          </div>
          <div className="likes" onClick={() => {this.handleColorStar()}}>
            <svg height="24" width="24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" 
              fill={colorStar ? "#ffc102" : "#000"} fillRule="evenodd"/>
            </svg>
            <p>{image.likes}</p>
          </div>
        </div>
      </div>
    </>)
  }
}

export default Image;
