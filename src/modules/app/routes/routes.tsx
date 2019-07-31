import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../containers/App';

const Routes = () => 
  <Router>
    <Route exact={true} path="/" component={App} />
    <Route path="/another" component={Oops} />
    {/* <Route component={PageNotFound} /> */}
  </Router>

export default Routes;
      


const Oops = () => <div style={{backgroundColor: "magenta"}}><p>thissss!!</p></div>