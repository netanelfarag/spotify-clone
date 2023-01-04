import React from 'react';
import Card from './Card.js';

export default function Section2() {
  const Individual = [
    'Ad-free music listening',
    'Play anywhere - even offline',
    'On-demand playback',
  ];
  const Duo = [
    '2 Premium accounts for a couple under one roof',
    'Ad-free music listening, play offline, on-demand playback',
  ];
  const Family = [
    '6 Premium accounts for family members living under one roof',
    'Block explicit music',
    'Ad-free music listening, play offline, on-demand playback',
  ];
  const Student = [
    'Special discount for eligible students in university',
    'Ad-free music listening',
    'Play anywhere - even offline',
    'On-demand playback',
  ];
  return (
    <section className="s2">
      <h1>Pick your Premium</h1>
      <p>Listen without limits on your phone, speaker, and other devices.</p>
      <div className="Cards">
        <Card
          name="Individual"
          price="19.90"
          acc="1 account"
          text={Individual}
        />
        <Card name="Duo" price="25.90" acc="2 accounts" text={Duo} />
        <Card
          name="Family"
          price="31.90"
          acc="Up to 6 accounts"
          text={Family}
        />
        <Card name="Student" price="9.95" acc="1 account" text={Student} />
      </div>
    </section>
  );
}
