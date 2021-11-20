import React, { Component } from "react";

export default class GlassesType extends Component {
  renderGlass = () => {
    let { typeGlass } = this.props;
    let { renderGlass2 } = this.props;
    return typeGlass.map((product, index) => {
      return (
        <div className="col-2" key={index} style={{ marginTop: "20px" }}>
          <button
            style={{ border: "none" }}
            onClick={() => {
              renderGlass2(product);
            }}
          >
            {" "}
            <img src={product.url} width="50%" height="50%" />{" "}
          </button>
          <br />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container bg-warning">
        <div className="row">{this.renderGlass()}</div>;
      </div>
    );
  }
}
