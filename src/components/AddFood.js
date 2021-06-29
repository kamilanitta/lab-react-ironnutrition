import React, { Component } from 'react';
import foods from '../foods.json';
import 'bulma/css/bulma.min.css';

class AddFood extends React.Component {
  state = {
    foods: [...foods],
    name: '',
    calories: 0,
    image: '',
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <button class="button">Add Food</button>

        <div>
          <div className="box column">
            <article className="media">
              <div className="control">
                <form>
                  {/* <label HTMLfor="myfile">Select an image:</label> */}
                  <input type="image" alt="image" />
                </form>
              </div>
              <div className="media-content">
                <div className="content">
                  <input
                    className="input"
                    type="text"
                    placeholder="Type your food name"
                  />
                  <input
                    className="input"
                    type="number"
                    placeholder="Type the calories info"
                  />
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <button className="button is-info">Submit</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFood;
