import React from 'react';

export default function Nav() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
            alt=""
          />
          <div className="nav-links">
            <a href="#" className="nav-item">
              Home
            </a>
            <a href="#" className="nav-item">
              Sign In
            </a>
            <a href="#" className="nav-item">
              Sign Up
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
