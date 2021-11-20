import React, { Component } from "react";

export default class BaiTapXe extends Component {
  IconDen = "./image/icons/icon-black.jpg";
  IconDo = "./image/icons/icon-red.jpg";
  IconBac = "./image/icons/icon-silver.jpg";
  IconThep = "./image/icons/icon-steel.jpg";

  state = {
    img: "./image/products/black-car.jpg",
  };

  handleImage = (color) => {
    this.setState({
      img: `./image/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div>
        <h3>Bai Tap Mau Xe</h3>
        <div className="row">
          <div className="col-lg-8">
            <img style={{ width: "50%" }} src={this.state.img} alt={"hinhxe"} />
          </div>

          <div className="col-lg-4">
            <button
              onClick={() => {
                this.handleImage("black");
              }}
            >
              <img src="./image/icons/icon-black.jpg" />
            </button>

            <button
              onClick={() => {
                this.handleImage("red");
              }}
            >
              <img src="./image/icons/icon-red.jpg" />
            </button>

            <button
              onClick={() => {
                this.handleImage("silver");
              }}
            >
              <img src="./image/icons/icon-silver.jpg" />
            </button>

            <button
              onClick={() => {
                this.handleImage("steel");
              }}
            >
              <img src="./image/icons/icon-steel.jpg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
