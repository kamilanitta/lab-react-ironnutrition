import React from 'react';
//import foods from './foods.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>IronNutrition</h1>
        <div class="columns">
          <div class="column">
            <FoodBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
