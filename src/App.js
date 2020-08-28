import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { GlobalProvider } from "./context/GlobalState"
import { Tasks } from './comp/Tasks';
import { AddTask } from './comp/AddTask';
import { RandomTasks } from './comp/RandomTask';
import { Switch, Route } from 'react-router-dom'
import Header from './comp/Header';


function App() {

  return (
    <GlobalProvider>
      <Header />
      <main>
        <Switch>
          <Route exact path="/view">
            <AddTask />
            <Tasks />
          </Route>
          <Route exact path="/">
            <RandomTasks />
          </Route>
        </Switch>
      </main>
    </GlobalProvider>
  );
}

export default App;
