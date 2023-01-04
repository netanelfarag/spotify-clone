import React from 'react';
import './style.css';

import Nav from './nav.js';
import Section1 from './S1.js';
import Section2 from './S2.js';

export default function App() {
  //https://www.spotify.com/il-en/premium/
  return (
    <div>
      <Nav />
      <main>
        <Section2 />
        <Section1 />
      </main>
    </div>
  );
}
