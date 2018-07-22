import React, { Component } from "react";
import Graphic2 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic2.svg";

class MethodologiesSection extends Component {
  render() {
    return (
      <section id="methodologies">
        <Graphic2 />
        <h2>methodologies</h2>
        <p>
          there is no cookie-cutter for any project. together we choose the best
          combination, whether it’s business-to-consumer or
          businesss-to-business we have the tools:
        </p>
      </section>
    );
  }
}

export default MethodologiesSection;
