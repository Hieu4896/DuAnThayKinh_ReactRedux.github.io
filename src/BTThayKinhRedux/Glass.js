import React, { Component } from "react";
import { connect } from "react-redux";

class Glass extends Component {
  renderMangDuLieu = () => {
    let { mangDuLieu } = this.props;
    return mangDuLieu.map((glass, index) => {
      return (
        <div className="col-2" key={index}>
          <img
            src={glass.url}
            width="50%"
            onClick={() => {
              this.props.doiKinh(glass.url);
            }}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row" style={{ backgroundColor: "purple" }}>
        {this.renderMangDuLieu()}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    doiKinh: (glassClick) => {
      const action = {
        type: "DOI_KINH",
        glassClick,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Glass);
