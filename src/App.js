import React, { Component } from 'react';
import './assets/scss/common.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './components/Index/';
import Article from './components/Article/';
import Admin from './components/Admin/';
import NotFound from './components/NotFound/';
class App extends Component {
  render() {
    return (
      <main className='wrap_app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/admin" component={Admin} />
            <Route path="/article/:id" component={Article} />
            <Route path="/category/:id" component={Category} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
