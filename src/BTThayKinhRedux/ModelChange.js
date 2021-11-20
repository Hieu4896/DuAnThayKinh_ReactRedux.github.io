import React, { Component } from "react";
import { connect } from "react-redux";
class ModelChange extends Component {
  render() {
    let { glass } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ position: "relative", width: "500px" }}
          src="./glassesImage/model.jpg"
        />
        <img
          style={{
            position: "absolute",
            width: "300px",
            left: "623px",
            top: "159px",
          }}
          src={glass.url}
        />
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    glass: rootReducer.BTThayKinhReducer,
  };
};
export default connect(mapStateToProps)(ModelChange);
