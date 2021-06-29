import React from 'react';
import foods from '../foods.json';

class FoodBox extends React.Component {
  state = {
    foods: [...foods],
  };

  render() {
    return (
      <div className=" w-50 p-3">
        {this.state.foods.map((foods) => {
          return (
            <div className=" border btn-light d-flex flex-row mb-3 align-items-center">
              <div className=" w-20 p-3">
                <img
                  src={foods.image}
                  alt={foods.name}
                  style={{ width: '60px' }}
                />
              </div>
              <div className="w-25 p-3">
                <div className="">
                  <p>
                    <strong>{foods.name}</strong> <br />
                    <small>{foods.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="d-flex justify-content-end flex-row ">
                  <div className="align-self-center ">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="p-2 align-self-center">
                    <button className="btn btn-primary">+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
