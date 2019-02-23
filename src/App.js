import React, { Component, Fragment } from 'react';
import './assets/scss/common.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './components/Index/index';
import Article from './components/Article/index';
import Admin from './components/Admin/index';
import NotFound from './components/NotFound/index';
import Category from './components/Category/';
import {Header, Footer} from './components/Common/'; 
import AboutUs from './components/About/';
class App extends Component {
  render() {
    return (
      <main className='wrap_app'>
          <Router>
            <Fragment>
              <Header />
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/about" component={AboutUs}  />
                <Route path="/article/:id" component={Article} />
                <Route path="/category/:id" component={Category} />
                <Route path="*" component={NotFound} />
              </Switch>
              <Footer />
            </Fragment>
          </Router>
      </main>
    );
  }
}

export default App;
