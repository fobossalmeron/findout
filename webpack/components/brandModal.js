import React, { Component } from "react";

class BrandModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var brand = this.props.brand;
    return (
      <div className={`brandModal ${this.props.className}`}>
          <a className="close" onClick={() => this.props.closeModal()}></a>
          <h3 dangerouslySetInnerHTML={{ __html: brand.title }}></h3>
          <p dangerouslySetInnerHTML={{ __html: brand.desc }}></p>
      </div>
    );
  }
}

export default BrandModal
