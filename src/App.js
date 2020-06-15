import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import UserLandingPage from './components/UserLandingPage';
import LoginPage from './components/LoginPage';
import DragAndDrop from './components/DragAndDrop';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/user" exact component={UserLandingPage} />
      <Route path="/drag-and-drop" exact component={DragAndDrop} />
    </Switch>
  );
}

export default App;
