import React from 'react';

export default function Section1() {
  return (
    <section className="s1">
      <div className="wrap1">
        <div className="text">
          <h1>Get Premium free for 1 month</h1>
          <h2>Just ₪19.90/month after. Cancel anytime.</h2>
        </div>
        <div className="btns">
          <button>GET STARTED</button>
          <button>VIEW PLANS</button>
        </div>
        <small>
          <a href="">Terms and conditions apply.</a> 1 month free not available
          for users who have already tried Premium.
        </small>
      </div>
    </section>
  );
}
