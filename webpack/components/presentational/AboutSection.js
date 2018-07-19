import React, { Component } from "react";
import ReactPlayer from "react-player";
import NikeIcon from "svg-react-loader?name=NikeIcon!../../../assets/img/clients/clientNike.svg";
import CocaColaIcon from "svg-react-loader?name=CocaColaIcon!../../../assets/img/clients/clientCocaCola.svg";
import ChanelIcon from "svg-react-loader?name=ChanelIcon!../../../assets/img/clients/clientChanel.svg";
import MoneyGramIcon from "svg-react-loader?name=MoneyGramIcon!../../../assets/img/clients/clientMoneyGram.svg";
import CapitalOneIcon from "svg-react-loader?name=CapitalOneIcon!../../../assets/img/clients/clientCapitalOne.svg";
import BaseFIcon from "svg-react-loader?name=BaseFIcon!../../../assets/img/clients/clientBaseF.svg";
import NovartisIcon from "svg-react-loader?name=NovartisIcon!../../../assets/img/clients/clientNovartis.svg";
import DiageoIcon from "svg-react-loader?name=DiageoIcon!../../../assets/img/clients/clientDiageo.svg";
import KraftIcon from "svg-react-loader?name=KraftIcon!../../../assets/img/clients/clientKraft.svg";
import PepsicoIcon from "svg-react-loader?name=PepsicoIcon!../../../assets/img/clients/clientPepsico.svg";
import BMWIcon from "svg-react-loader?name=BMWIcon!../../../assets/img/clients/clientBMW.svg";
import BossIcon from "svg-react-loader?name=BossIcon!../../../assets/img/clients/clientBoss.svg";
import Graphic1 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic1.svg";
import Graphic2 from "svg-react-loader?name=Graphic2!../../../assets/img/layout/graphic2.svg";
import Graphic3 from "svg-react-loader?name=Graphic3!../../../assets/img/layout/graphic3.svg";
import Graphic4 from "svg-react-loader?name=Graphic4!../../../assets/img/layout/graphic4.svg";
import Graphic5 from "svg-react-loader?name=Graphic5!../../../assets/img/layout/graphic5.svg";

class AboutSection extends Component {
  render() {
    return (
      <section id="what">
        <div className="screen1 screen">
          <ReactPlayer url="https://vimeo.com/270627606" />
        </div>
        <div className="screen2 screen">
          <p>
            <span>find:out</span> is an innovative boutique research company
            that finds solutions where others can’t!
          </p>
          <p>
            <span>unique, simple & easy:</span>
            The perfect mix of industry leading methodologies – many of which we
            have invented, like QualQuant™, merging qualitative and qualitative
            research simultaneous, is what sets find:out apart from the rest
          </p>
          <ul>
            <li>
              <Graphic2 />
              <h3>unique recruitment</h3>
              <h4>the industries recruitment</h4>
            </li>
            <li>
              <Graphic2 />
              <h3>best methodologies</h3>
              <h4>choosing the best mix together</h4>
            </li>
            <li>
              <Graphic2 />
              <h3>branding & innovation</h3>
              <h4>from insight to solution </h4>
            </li>
          </ul>
        </div>
        <div className="screen3 screen">
          <div className="box">
            <h2>the results are simple</h2>
            <Graphic5 />
          </div>
          <h3>rapid</h3>
          <p>faster than any other innovation and IT process</p>
          <h3>repositioning</h3>
          <p>
            the brand, company and experience towards customers and investors
          </p>
          <h3>(r)evolutionize</h3>
          <p>
            changing the brand, category and experience forever – increasing
            ROI, faster
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;
