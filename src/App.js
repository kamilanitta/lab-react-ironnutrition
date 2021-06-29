import React from 'react';
import 'bulma/css/bulma.css';

import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1 class="title">IronNutrition</h1>

        <div class="columns is-6">
          <div class="col-6 ">
            <AddFood />
            <FoodBox />
          </div>
          <div class="col-6">
            <h1 class="title">Place Holder for Food Description</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
