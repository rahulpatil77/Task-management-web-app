import React, { Fragment } from "react";
import "./App.css"

//components

import InputTask from "./components/InputTask";
import ListTasks from "./components/ListTasks";
import SearchTask from "./components/SearchTask";
import Header from "./components/Header";



function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <SearchTask />
        <InputTask />
        <ListTasks />
      </div>
    </Fragment>
  );
}

export default App;