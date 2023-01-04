import React from 'react';

import Check from './Check.js';

export default function Card(props) {
  return (
    <div className="Card">
      <div className="head">
        <span className="free">1 month free</span>
        <h3 className="name">{props.name}</h3>
        <p className="price">
          ₪<span>{props.price}</span>/month after offer period
        </p>
        <p className="acc">{props.acc}</p>
      </div>
      <div className="Body">
        <Check text={props.text} />
      </div>
      <div className="foot">
        <button>GET STARTED</button>
        <small>
          <a href="">Terms and conditions apply.</a> 1 month free not available
          for users who have already tried Premium.
        </small>
      </div>
    </div>
  );
}
