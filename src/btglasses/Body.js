import React, { Component } from "react";
import GlassesInfo from "./GlassesInfo";
import WearGlasses from "./WearGlasses";
import GlassesType from "./GlassesType";
export default class Body extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glassCurrent: {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlass1 = (type) => {
    this.setState({
      glassCurrent: type,
    });
  };
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 " style={{ marginTop: "300px" }}>
          <WearGlasses state1={this.state} />
        </div>
        <div className="col-12" style={{ marginTop: "10px" }}>
          <GlassesType
            typeGlass={this.arrGlasses}
            renderGlass2={this.renderGlass1}
          />
        </div>
      </div>
    );
  }
}
