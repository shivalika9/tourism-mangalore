import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Destination from './components/Destination';
import Guide from './components/Guide';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/destinations" component={Destination} />
      <Route path="/guide" component={Guide} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
