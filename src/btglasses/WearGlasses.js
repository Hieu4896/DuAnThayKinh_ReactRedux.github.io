import React, { Component } from "react";

export default class WearGlasses extends Component {
  render() {
    let { state1 } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ position: "relative", width: "250px" }}
          src="./glassesImage/model.jpg"
        />
        <img
          style={{ position: "absolute", width: "11%", top: "74px" }}
          src={state1.glassCurrent.url}
        />
        <div
          style={{
            position: "absolute",
            width: "250px",
            backgroundColor: "#00808087",
            bottom: "0",
            textAlign: "left",
          }}
        >
          <p style={{ color: "orange" }}>{state1.glassCurrent.name}</p>
          <p>{state1.glassCurrent.desc}</p>
        </div>
      </div>
    );
  }
}
