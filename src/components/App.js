import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// Components
import Article from './Article';
import Menu from './Menu';

import Articles from '../Articles'

const Home = () => ( <h1 className="display-2">Bienvenue</h1> );
const NoMatch = () => (<h1 className="display-2">404 Not Found</h1>);

class Blog extends Component {
  render() {
    const articles = Object.keys(Articles)
      .filter(key => (this.props.filtre) ? Articles[key].titre.includes(this.props.filtre) : true)
      .map((key, index) => <Article key={index} titre={Articles[key].titre} contenu={Articles[key].contenu} /> );

    return (
      <div>
        {articles}
      </div>
    )
  }
}

class App extends Component {

  state = {filtre: ""};

  MajFiltre = (filtre) => {
    this.setState({ filtre });
  };

  render() {

    return (
      <Router>
        <div>
          <Menu MajFiltre={this.MajFiltre} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" render={() => (
                <Blog filtre={this.state.filtre} />
              )} />
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
