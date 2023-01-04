import React from 'react';

export default function Card(props) {
  return (
    <div className="Card">
      <div className="head">
        <span>1 month free</span>
        <h3>{props.name}</h3>
        <p>
          <span>{props.price}</span>
        </p>
        <p>{props.acc}</p>
      </div>
    </div>
  );
}
