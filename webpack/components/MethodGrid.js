import React, { Component } from "react";
import MethodModal from "./methodModal";
import Icon1 from "svg-react-loader?name=Icon1!./../../assets/img/methodologies/1.svg";
import Icon2 from "svg-react-loader?name=Icon2!./../../assets/img/methodologies/2.svg";
import Icon3 from "svg-react-loader?name=Icon3!./../../assets/img/methodologies/3.svg";
import Icon4 from "svg-react-loader?name=Icon4!./../../assets/img/methodologies/4.svg";
import Icon5 from "svg-react-loader?name=Icon5!./../../assets/img/methodologies/5.svg";
import Icon6 from "svg-react-loader?name=Icon6!./../../assets/img/methodologies/6.svg";
import Icon7 from "svg-react-loader?name=Icon7!./../../assets/img/methodologies/7.svg";
import Icon8 from "svg-react-loader?name=Icon8!./../../assets/img/methodologies/8.svg";
import Icon9 from "svg-react-loader?name=Icon9!./../../assets/img/methodologies/9.svg";
import Icon10 from "svg-react-loader?name=Icon10!./../../assets/img/methodologies/10.svg";
import Icon11 from "svg-react-loader?name=Icon11!./../../assets/img/methodologies/11.svg";
import Icon12 from "svg-react-loader?name=Icon12!./../../assets/img/methodologies/12.svg";
import Icon13 from "svg-react-loader?name=Icon13!./../../assets/img/methodologies/13.svg";
import Icon14 from "svg-react-loader?name=Icon14!./../../assets/img/methodologies/14.svg";
import Icon15 from "svg-react-loader?name=Icon15!./../../assets/img/methodologies/15.svg";

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
        "Today’s generation of children are more brand conscious than ever.<br/>Teens between 13 and 17 have 145 conversations about brands, the double of adults.",
        "71% of parents solicit opinions from their kids regarding purchases.",
        "In the US there are over 57 million school age children and teenagers who spend about $100 billion each year.",
        "52% of 3 year olds and 73% of 4 year olds ask their parents for specific brands."
      ],
      general:
        "Not everyone understands the “know how” or has the energy to enjoy working with youth but we do and have been doing it for many years! find:out specializes in research processes for kids in the efforts of innovation, positioning, and branding market strategies. We have great experience working with children, toddlers, tweens and teens. Our multidisciplinary team of psychologists, researchers and anthropologists have developed amazing techniques to build rapport quickly by employing age-appropriate dynamics. find:out helps you to get the information you need to answer questions about youth and their parents."
    },
    {
      id: 2,
      title: "protocepting",
      icon: <Icon2 />,
      blues: [
        "Extensive knowledge in prototyping",
        "Global capability and experience",
        "Global multidisciplinary team"
      ],
      blacks: [
        "find:out protocepting process does it differently by taking you on a breakthrough food product innovation through a consumer emotions research.",
        "We become the guardians of your concepts to achieve the market impact envisioned by you and your innovation team."
      ],
      general:
        "At find:out we believe that a great idea cannot reach awesome status until you can smell it, taste it, see it and touch it. Our product development process brings concepts to life as edible protocepts and packaging prototypes to gain deeper out of the ordinary-fresh insights.<br/><br/>find:out can help you, your team and your company in the developmental stages of new innovative ideas.<br/>We will help you face some of the most complex challenges within the protocepting process from stage 1; starting with a working prototype that must be refined into gold standard and finally developed into a commercially viable product."
    },
    {
      id: 3,
      title: "hispanic market research",
      icon: <Icon3 />,
      blues: ["Diverse “glocal“ team", "Global capability"],
      blacks: [
        "Over 52 million Latinos are impacting every aspect of the national US landscape.",
        "Hispanics tend to shop less often, but spend more per trip and are more likely to buy name brand products in comparison to the average Non-Hispanic shopper.",
        "The Hispanic market’s size and buying power is projected to reach $1.5 trillion by 2015, surpassing every other minority.",
        "The Hispanic population will constitute 31% of the nation’s population by 2060, reaching 128.8 million."
      ],
      general:
        "The U.S. Hispanic population is the largest minority segment and is growing at a dramatic rate. With this extensive growth, the future U.S. economy will depend on Hispanic consumers. Through our Hispanic market research, find:out can help guide your company to target Hispanic consumers to increase profit, sales and growth while meeting the continuing growth of the market."
    },
    {
      id: 4,
      title: "QualQuant™",
      icon: <Icon4 />,
      special: true,
      general:
        "<h5>The ultimate of qualitative and quantitative done simultaneously</h5><p>Why compromise or choose between qualitative or quantitative? Find:out has developed the world’s first intelligent fusion of qualitative and quantitative.<br/><br/>QualQuant™ combines qualitative and quantitative market research simultaneously.</p><h5>How it works?</h5><p>1. Specially trained find:out moderators conduct qualitative focus group or interviews.<br/><br/>2. Immediately after qualitative session respondents is given a digital questionnaire using find:out’s proprietary software, questionnaires run on iPad’s.<br/><br/>3. Qualitative and quantitative analysis is conducted and compared simultaneously.</p><h5>Benefit</h5><ul><li>Save time and money: combining qualitative and quantitative studies saves time and money <br/>Cutting up to 3 months off a research project.</li><li>Get tangible numbers and data of respondent’s insights and answers.</li></ul><h5>Even faster results</h5><p>QualQuant™ can be combined with immdi:answer™ to give customized reports 24 hours after sessions conducted.</p>"
    },
    {
      id: 5,
      title: "immidi:answer",
      icon: <Icon5 />,
      special: true,
      general:
        "<h5>Get reports and answers faster and better</h5><p>Imagine personalized reports with data in 24 hours or after each day of market research fieldwork? Imagine no more. Introducing a revolutionary tool immidi:answer.<br/><br/>Get reports and answers compiled almost immediately with immidi:answer. Combined with either find:out’s unique QualQuant (Qualitative and Quantitative combined market research) or our qualitative methodologies, immidi:answer is designed for the busy marketer that needs accurate data fast!</p><h5>How immidi:answer works</h5><ul><li>Data is compiled via our digital cloud database and put into easy, understandable and comprehendible charts <br/>Optional: your find:out moderator and analysis can add instant human analysis to the data and charts</li><li>24 hours or after the completion of your market research study, immidi:answer will compile a personalized data report</li><li>You are alerted on your smartphone and can login to see data or get an extracted PDF</li></ul><h5>Imagine what you can do with immidi:answer</h5><ul><li>Faster results! Saving up to months of speed-to-market</li><li>Get daily answers on ongoing studies and adjustments if needed</li><li>Personalized reports that can be shared with colleagues and management</li></ul><h5>In other words: faster, better answers and reports for you and your studies</h5>"
    },
    {
      id: 6,
      title: "branding",
      icon: <Icon6 />,
      blues: [
        "Extensive knowledge working with multiple",
        "Research methodologies",
        "Global multidisciplinary team",
        "Global capability and experience"
      ],
      blacks: [
        "Branding strategy",
        "Branding architecture",
        "Branding stretchability",
        "Branding revitalizing and positioning"
      ],
      general:
        "Like great ideas, brands do not come out of nowhere. They are meticulously researched, planned, strategized and marketed. find:out can help you in creating a branding strategy by researching and analyzing your market, competitors and audiences. Our experts know that your consumers add their own unique meaning and interpretation to the brands they stand for; reason why today more than ever, paying attention to what your buyers say about your brand is a must in the efforts of innovation.<br/><br/>At find:out we prefer the “intelligent use of design”, advertising, marketing, and service proposition, to generate the associations in people’s minds that will benefit your organization.<br/><br/>find:out’s “glocal“ team has experience in the most important Branding Areas:"
    },
    {
      id: 7,
      title: "validation",
      icon: <Icon7 />,
      blues: [
        "Live and real time data gathering and statistical analysis",
        "Sequential market research - increasing quality and cutting time dramatically",
        "Compass model: testing opposites and relations",
        "Optimization and fusion of concepts to create ultimate concepts",
        "Instant rating by consumers on ipad’s for higher accuracy",
        "A team of global experts from all major industries",
        "A unique co-creation process that compiles data affected by numbers and personal opinion of respondents",
        "Our process uses a 6 value graphic scale to determine true value",
        "Optimizations that are continuous improving to gain the ultimate concepts"
      ],
      blacks: [
        "A validation study can give solutions to branding or product launches in a matter of weeks by saving time, money and unnecessary distractions.",
        "Validation has two critical functions. First, it promotes dialogue and learning. Second, it safeguards brands by implementing global standard.",
        "Validation can account for uncertainty and the facts that one generally needs to predict particular quantities of interest"
      ],
      general:
        "There are limited resources out there today to distinguish between a good idea and a bad idea. find:out can help you determine if a concept or idea will work prior to capital investments or production of any product by analyzing and optimizing your ideal concepts based only on high impact attributes, through a sequential improvement funnel.<br/><br/>We insert your ideas in a validation laboratory, then re-insert optimized concepts until they reach an overall approval of 85% to guarantee that it is a winning concept, but most important to validate a product that your consumers will love! For years our experts have been working in conjunction with leaders of multiple Fortune 500 companies to validate the most innovative ideas and concepts that you find everyday. We can help you and your team to save time to make decisions now."
    },
    {
      id: 8,
      title: "pharmaceutical market research",
      icon: <Icon8 />,
      blues: [
        "Personal idi done by our staff of doctors",
        " Expects in patenting expiration strategy",
        "Conjoined process of optimization",
        "Iso certified",
        "Optimization and fusion of concepts to create ultimate concepts",
        "A team of global well trusted experts from within the pharmaceutical industry",
        "Xtensive knowledge working with multiple research methodologies"
      ],
      blacks: [
        "The pharmaceutical industry has been highly profitable, averaging 3 times more than the average return from any other industry in the global Fortune 500.",
        "The period between 2015 and 2022 will be the toughest for innovative companies.<br/>Many global blockbusters will lose their patent protection during this period."
      ],
      general:
        "find:out pharmaceutical’s approach is a process aimed at the pharmaceutical industry using the development and implementation of proven marketing strategies for either corporate, product or category brands. These marketing strategies are geared towards creating an effective way to imply strategies most pharmaceutical face such as pre-patent expiration, launching or re-launching its brand. Our goal is to help you focus on challenges faced by the pharmaceutical industry today by using a patented marketing validation process that identifies the correct marketing and branding strategies prior to implementation.<br/>take:care is led by our unique multidisciplinary team of doctors, physiologist and researchers from around the world who have participated in conducting multiple studies with Fortune 500 leaders within the pharmaceutical industry."
    },
    {
      id: 9,
      title: "ethnographic approach",
      icon: <Icon9 />,
      blues: ["Diverse “glocal“ team", "Global capability"],
      blacks: [
        "Ethnographic research is the only research method gaining traction amongst businesses looking for a discernible edge in predicting consumer behavior.",
        "Today, ethnographic research represents about 5% to 10% of the $1.1 billion businesses spent on new methods of qualitative research.",
        "Ethnography is imperative to international development.",
        "Today, ethnographic research generates the equivalent buzz in the qualitative research community that online research created at its peak."
      ],
      general:
        "At find:out we believe that our ethnographic research approach and its focus on consumers experience is critical in order to decrease the trend of treating people as numbers and data.<br/><br/>find:out will immerse you and your colleagues in your consumers everyday life, by using a combination of various techniques to understand their behaviors. Through personalized ethnography research design, find:out will take you on a guided tour through your customers world to find paths that lead to innovation."
    },
    {
      id: 10,
      title: "b2b",
      icon: <Icon10 />,
      blues: [
        "A team of global experts from all major industries",
        "Compass model: testing opposites and relations",
        "Sequential market research - increasing quality and cutting time dramatically",
        "Global capability"
      ],
      general:
        "Business to business marketing is evolving faster than ever. As more businesses continue to grow it’s become increasingly important to know the best practices and strategies in order to sell more products and services.<br/>The world of B2B Marketing moves incredibly fast and at find:out we understand that B2B companies require a team with extensive experience in branding and positioning in order to take your marketing campaign to the next level. We help you and your team to research through qualitative and quantitative methods to answer each and every one of your questions; from the purpose to the methods, from the sampling to the analysis and ultimately to the interpretation of truly fresh insights and findings."
    },
    {
      id: 11,
      title: "ad testing",
      icon: <Icon11 />,
      blues: [
        "Extensive knowledge working with children",
        "A team of global experts from all major industries",
        "Helps your company get the highest ROI out of your ad spend",
        "Instant rating by consumers."
      ],
      blacks: [
        "Advertising represents a major part of any companies marketing budget and we understand the need to be sure that your creativity will result in a relationship between consumers and your brand.",
        "Ad testing is one of the best ways to see how effective a new AD might be. At find:out we can help resolve if your ad stands out and captures your target consumer by testing it with different variables.",
        "By testing your AD’s we can provides insights to help you make informed decisions about how to best use your advertising budget."
      ]
    },
    {
      id: 12,
      title: "qualitative: focus groups",
      icon: <Icon12 />,
      blues: [
        "Compass model: testing opposites and relations",
        "Optimization and fusion of concepts to create ultimate concepts",
        "A team of global experts from all major industries",
        "A unique co-creation process that compiles data affected by numbers and personal opinion of respondents",
        "Instant rating by consumers on ipad’s for higher accuracy",
        "Sequential market research - increasing quality and cutting time dramatically"
      ],
      blacks: [
        "The face-to-face involvement can ensure the topic is always on track, and encourage participants’ engagement without one individual dominating the meeting.",
        "Focus groups can provide real direction and depth on insights to a project."
      ],
      general:
        "At find:out we believe that our qualitative research approach focuses on consumers true insights.<br/>Our research is carried out using methodologies such as one-on-one interviews, focus groups and ethnographic observation. Through these multifunctional methodologies we are able to find the true value of each product from your customers. Our methodologies can be conjoined to gain optimal results depending on the direction based on our proven and effective optimization process."
    },
    {
      id: 13,
      title: "conjoint analysis",
      icon: <Icon13 />,
      blues: [
        "Sequential market research - increasing",
        "Quality and cutting time dramatically",
        "Compass model: testing opposites and relations",
        "Optimization and fusion of concepts to create ultimate concepts",
        "Instant rating by consumers on ipad’s for higher accuracy",
        "A unique co-creation process that compiles data affected by numbers and personal opinion of respondents",
        "A team of global experts from all major industries"
      ],
      blacks: [
        "Conjoint Analysis determines how your consumers trade-off different price levels with the features of your product that they most desire.",
        "Conjoint Analysis reveals what factors drive consumer behavior:  brand, price, or features - and whether your brand can command a premium"
      ],
      general:
        "Here at find:out we believe that perception equals reality and with conjoint analysis we can provide how your consumers understand value in a product and brand.<br/>At find:out conjoint analysis is used to identify consumer values in choosing objects that may have many different attributes and characteristics. Conjoint analysis is an important marketing technique that can help in assessing the weight individuals place on different features of a given product or service. This method has become important in concluding how consumers subconsciously perceive a brand and product and the value they place on it."
    },
    {
      id: 14,
      title: "online marketing",
      icon: <Icon14 />,
      blues: [
        "Live and real time data gathering and statistical analysis",
        "Sequential market research - increasing",
        "Quality and cutting time dramatically",
        "Instant rating by consumers on ipad’s for higher accuracy",
        "A unique co-creation process that compiles data affected by numbers and personal opinion of respondents.",
        "Our process uses a 6 value graphic scale to determine true value a team of global experts from all major industries"
      ],
      blacks: [
        "With online marketing, everything can be tracked, you get immediate results on traffic growth, leads, and sales conversions..",
        "Effective online marketing can help a business be searched and found more than double the amount of other companies.",
        "Online marketing can reach more consumers than traditional methods."
      ],
      general:
        "Online marketing has become one of the most efficient ways to reach a wide range of consumers and audiences. Understanding how to capture an audience through online marketing and forums can have a profound impact on a business, their brand and products. At find:out we help in strategizing with branding and positioning in order find the appropriate channels online to advertise your business affectively and efficiently through SEO web optimization, social media marketing, online adverting and so much more."
    },
    {
      id: 15,
      title: "online forums",
      icon: <Icon15 />,
      blues: [
        "Live and real time data gathering and statistical analysis",
        "Sequential market research - increasing quality and cutting time dramatically",
        "Instant rating by consumers on ipad’s for higher accuracy",
        "A unique co-creation process that compiles data affected by numbers and personal opinion of respondents",
        "Our process uses a 6 value graphic scale to determine true value",
        "A team of global experts from all major industries"
      ],
      blacks: [
        "With online marketing, everything can be tracked, you get immediate results on traffic growth, leads, and sales conversions.",
        "Effective online marketing can help a business be searched and found more than double the amount of other companies.",
        "Online marketing can reach more consumers than traditional methods."
      ],
      general:
        "Online forum has become one of the most efficient ways to reach a wide range of consumers and audiences. Understanding how to capture an audience through online marketing and forums can have a profound impact on a business, their brand and products. At find:out we help in strategizing with branding and positioning in order find the appropriate channels online to advertise your business affectively and efficiently through SEO web optimization, social media marketing, online adverting and so much more."
    }
  ]
};

class MethodGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMethod: methodData.methods[0],
      modalToggled: false
    };
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }

  nextModal(selected) {
    var index = methodData.methods.indexOf(selected);
    if (index + 2 > methodData.methods.length) {
      var nextMethodName = methodData.methods[0];
    } else {
      var nextMethodName = methodData.methods[index + 1];
    }
    this.setState({
      selectedMethod: nextMethodName
    });
  }

  prevModal(selected) {
    var index = methodData.methods.indexOf(selected);
    if (index - 1 < 0) {
      var nextMethodName = methodData.methods[methodData.methods.length - 1];
    } else {
      var nextMethodName = methodData.methods[index - 1];
    }
    this.setState({
      selectedMethod: nextMethodName
    });
  }

  wasBrandSelected(brand) {
    if (brand !== this.state.selectedMethod) {
      this.setState({
        modalToggled: !this.state.modalToggled,
        selectedMethod: selected
      });
    }
  }

  toggleModal(selected) {
    if (selected !== this.state.selectedMethod) {
      this.setState({
        modalToggled: true,
        selectedMethod: selected
      });
    } else {
      this.setState({
        modalToggled: !this.state.modalToggled,
        selectedMethod: selected
      });
    }
  }

  render() {
    var list = methodData.methods.map((method, index) => (
      <li
        className="method"
        key={method.id}
        onClick={() => this.toggleModal(method)}
      >
        {method.icon}
        <h3 dangerouslySetInnerHTML={{ __html: method.title }} />
      </li>
    ));
    var isModalToggled = this.state.modalToggled ? "visible" : "";
    return (
      <div className="methodGrid">
        <ul className={"methodList " + isModalToggled}>
          {list}
        </ul>
        <MethodModal
            className={isModalToggled}
            method={this.state.selectedMethod}
            methodss={methodData.methods}
            changeMethod={this.toggleModal.bind(this)}
            prevModal={this.prevModal.bind(this)}
            nextModal={this.nextModal.bind(this)}
            closeModal={this.closeModal.bind(this)}
          />
      </div>
    );
  }
}

export default MethodGrid;
