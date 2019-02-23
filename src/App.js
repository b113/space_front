import React, { Component, Fragment } from 'react';
import './assets/scss/common.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Index from './components/Index/';
import Article from './components/Article/';
import Admin from './components/Admin/';
import NotFound from './components/NotFound/';
=======
import Index from './components/Index/index';
import Article from './components/Article/index';
import Admin from './components/Admin/index';
import NotFound from './components/NotFound/index';
import Category from './components/Category/';
import {Header, Footer} from './components/Common/'; 
>>>>>>> 4001caa26dd9413bc184fcdbcd6171ca5bd4b1c2
class App extends Component {
  render() {
    return (
      <main className='wrap_app'>

          <Router>
            <Fragment>
              <div className='menu-container'>
                <div className='container'>
                  <Header />
                </div>
              </div>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/admin" component={Admin} />
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
