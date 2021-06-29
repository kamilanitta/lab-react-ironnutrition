import React from 'react';
import 'bulma/css/bulma.css';

import foods from '../foods.json';

class FoodBox extends React.Component {
  state = {
    foods: [...foods],
  };

  render() {
    return (
      <div className="column">
        {this.state.foods.map((foods) => {
          return (
            <div className="box column">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={foods.image} alt={foods.name} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{foods.name}</strong> <br />
                      <small>{foods.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        value={foods.quantity}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}
export default FoodBox;
