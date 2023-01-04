import React from 'react';
import Card from './Card.js';

export default function Section2() {
  return (
    <section className="s2">
      <h1>Pick your Premium</h1>
      <p>Listen without limits on your phone, speaker, and other devices.</p>
      <div className="Cards">
        <Card name="Individual" price="19.90" acc="1 account" />
        <Card name="Duo" price="25.90" acc="2 accounts" />
        <Card name="Family" price="31.90" acc="Up to 6 accounts" />
        <Card name="Student" price="9.95" acc="1 account" />
      </div>
    </section>
  );
}
