import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="mb-3">
        <nav className="navbar navbar-expand navbar-light bg-light py-3 lh-1">
          <div className="container justify-content-center">
            <a className="navbar-brand fs-2 fw-bold" href="/">
              Lead<span className="text-primary">Man</span>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
