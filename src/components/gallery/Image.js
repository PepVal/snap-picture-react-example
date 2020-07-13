import React from 'react';

const Image = props => (
  <div className="card">
    <li>
      <img className="photo" src={props.url} alt={props.alt} />
    </li>
    <div className="description">
      <div>
        <p className="username">{props.user_name}</p>
      </div>
      <div className="likes">
        <svg height="24" width="24">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" fill="#ffc102" fillRule="evenodd"/>
        </svg>
        <p>{props.likes}</p>
      </div>
    </div>
  </div>
);

export default Image;
