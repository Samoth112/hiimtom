import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';

function App(): React.ReactElement {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};

export default App;
