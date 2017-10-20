import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">{ this.props.titre }</h4>
          <p className="card-text ">{ this.props.contenu }</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    );
  }
}

export default Article;
