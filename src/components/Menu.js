import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

  MajFiltre = event => {
      event.preventDefault();

      const filtre = this.filtre.value;

      this.props.MajFiltre(filtre);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
          <Link className="navbar-brand" to="/" >Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/blog">Blog <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={e => this.MajFiltre(e)}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={input => this.filtre = input} />
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
    );
  }
}

export default Menu;
