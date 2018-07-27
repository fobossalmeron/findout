import React, { Component } from "react";
import FindOutIcon from "./../../../assets/img/layout/findOut.svg";

class WhySection extends Component {
  render() {
    return (
      <section id="why">
        <h2>
          why <FindOutIcon />
        </h2>
        <ul className="whySteps">
          <li>
            <span>1</span>
            <h3>no cookie cutter</h3>
            <p>using the best methodologies – many of which we have invented</p>
          </li>
          <li>
            <span>2</span>
            <h3>experts team</h3>
            <p>dedicated senior team on every project</p>
          </li>
          <li>
            <span>3</span>
            <h3>certified & trusted</h3>
            <p>
              ISO:9001 certified and trusted by the world’s largest brands for
              years
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default WhySection;
