import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { ReactPage } from './ReactPage';
import { HooksPage } from './HooksPage';
import { JsPage } from './JsPage';


function App() {
  return (
        <BrowserRouter>
    <div className="App">
      
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/react" component={ReactPage}/>
          <Route path="/js" component={ReactPage}/>
          <Route path="/hooks" component={HooksPage}/>
        </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
