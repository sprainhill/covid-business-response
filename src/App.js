import React from 'react';
import './App.css';
import Header from "./components/Header"
import ResponseList from "./components/ResponseList"
import bulma from "bulma"

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <ResponseList />
      <div>
        <button class="button">Bulma test</button>
      </div>
  
    </div>
  );
}

export default App;
