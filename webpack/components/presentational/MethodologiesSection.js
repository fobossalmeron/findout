import React, { Component } from "react";
import MethodGrid from "./../MethodGrid";
import Graphic2 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic2.svg";
import Icon1 from "svg-react-loader?name=Icon1!../../../assets/img/methodologies/1.svg";
import Icon2 from "svg-react-loader?name=Icon2!../../../assets/img/methodologies/2.svg";
import Icon3 from "svg-react-loader?name=Icon3!../../../assets/img/methodologies/3.svg";
import Icon4 from "svg-react-loader?name=Icon4!../../../assets/img/methodologies/4.svg";
import Icon5 from "svg-react-loader?name=Icon5!../../../assets/img/methodologies/5.svg";
import Icon6 from "svg-react-loader?name=Icon6!../../../assets/img/methodologies/6.svg";
import Icon7 from "svg-react-loader?name=Icon7!../../../assets/img/methodologies/7.svg";
import Icon8 from "svg-react-loader?name=Icon8!../../../assets/img/methodologies/8.svg";
import Icon9 from "svg-react-loader?name=Icon9!../../../assets/img/methodologies/9.svg";
import Icon10 from "svg-react-loader?name=Icon10!../../../assets/img/methodologies/10.svg";
import Icon11 from "svg-react-loader?name=Icon11!../../../assets/img/methodologies/11.svg";
import Icon12 from "svg-react-loader?name=Icon12!../../../assets/img/methodologies/12.svg";
import Icon13 from "svg-react-loader?name=Icon13!../../../assets/img/methodologies/13.svg";
import Icon14 from "svg-react-loader?name=Icon14!../../../assets/img/methodologies/14.svg";
import Icon15 from "svg-react-loader?name=Icon15!../../../assets/img/methodologies/15.svg";

const methodData = {
  methods: [
    {
      id: 1,
      title: "market research for the youth",
      icon: <Icon1 />,
      blues: [
        "Extensive knowledge working with children",
        "Ethically customized sessions to fit kids needs",
        "High comfort level for children",
        "Global experience"
      ],
      blacks: [
        "Today’s generation of children are more brand conscious than ever.</br>Teens between 13 and 17 have 145 conversations about brands, the double of adults.",
        "71% of parents solicit opinions from their kids regarding purchases.",
        "In the US there are over 57 million school age children and teenagers who</br>spend about $100 billion each year.",
        "52% of 3 year olds and 73% of 4 year olds ask their parents for specific brands."
      ],
      general:
        "Not everyone understands the “know how” or has the energy to enjoy working with youth but we do and have been doing it for many years! find:out specializes in research processes for kids in the efforts of innovation, positioning, and branding market strategies. We have great experience working with children, toddlers, tweens and teens. Our multidisciplinary team of psychologists, researchers and anthropologists have developed amazing techniques to build rapport quickly by employing age-appropriate dynamics. find:out helps you to get the information you need to answer questions about youth and their parents."
    }
  ]
};
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
        <MethodGrid/>
      </section>
    );
  }
}

export default MethodologiesSection;
