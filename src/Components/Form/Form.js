import React, { Component } from "react";
import "./form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageUrlInput: "",
      productNameInput: "",
      priceInput: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.priceInput);
  };

  render() {
    let { imageUrlInput, productNameInput, priceInput } = this.state;
    return (
      <div className="input-btn-container">
        <div className="inputs">
          <input
            onChange={this.handleChange}
            value={this.state.imageUrlInput}
            name="imageUrlInput"
            placeholder="Image URL"
          />
          <input
            onChange={this.handleChange}
            value={this.state.productNameInput}
            name="productNameInput"
            placeholder="Product Name"
          />
          <input
            onChange={this.handleChange}
            value={this.state.priceInput}
            name="priceInput"
            placeholder="Price"
          />
        </div>
        <div className="buttons">
          <button>Cancel</button>

          <button
            onClick={this.props.addProduct(
              imageUrlInput,
              productNameInput,
              priceInput
            )}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
