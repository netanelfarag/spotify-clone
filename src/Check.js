import React from 'react';
import { useState } from 'react';

import V from './check-svgrepo-com.svg';

function C(props) {
  return (
    <div className="check">
      <img src={V} alt="" />
      <span>{props.item}</span>
    </div>
  );
}

export default function Check(props) {
  return (
    <div>
      {props.text.map((item) => (
        <C item={item} />
      ))}
    </div>
  );
}
