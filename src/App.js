import React, { Component } from 'react';
import './assets/scss/common.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './components/Index/index';
import Article from './components/Article/index';
import Admin from './components/Admin/index';
import NotFound from './components/NotFound/index';
class App extends Component {
  render() {
    return (
      <main className='wrap_app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/admin" component={Admin} />
            <Route path="/article/:id" component={Article} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
