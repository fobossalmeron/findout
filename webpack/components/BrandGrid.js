import React, { Component } from "react";
import BrandModal from "./brandModal";
import CocaColaIcon from "svg-react-loader?name=CocaColaIcon!./../../assets/img/clients/clientCocaCola.svg";
import NikeIcon from "svg-react-loader?name=NikeIcon!./../../assets/img/clients/clientNike.svg";
import KraftIcon from "svg-react-loader?name=KraftIcon!./../../assets/img/clients/clientKraft.svg";
import ChanelIcon from "svg-react-loader?name=ChanelIcon!./../../assets/img/clients/clientChanel.svg";
import HPIcon from "svg-react-loader?name=HPIcon!./../../assets/img/clients/clientHP.svg";
import FritoLayIcon from "svg-react-loader?name=FritoLayIcon!./../../assets/img/clients/clientFritoLay.svg";
import UnileverIcon from "svg-react-loader?name=UnileverIcon!./../../assets/img/clients/clientUnilever.svg";
import PepsicoIcon from "svg-react-loader?name=PepsicoIcon!./../../assets/img/clients/clientPepsico.svg";
import KelloggsIcon from "svg-react-loader?name=KelloggsIcon!./../../assets/img/clients/clientKelloggs.svg";
import MaryKayIcon from "svg-react-loader?name=MaryKayIcon!./../../assets/img/clients/clientMaryKay.svg";
import LundbeckIcon from "svg-react-loader?name=LundbeckIcon!./../../assets/img/clients/clientLudbeck.svg";
import DiageoIcon from "svg-react-loader?name=DiageoIcon!./../../assets/img/clients/clientDiageo.svg";

const brandsData = {
  brands: [
    {
      id: 1,
      title: "Coca-Cola",
      desc:
        "<b>The Coca-Cola Company.</b> In-depth research, innovation development and innovation validation for water, juice, energy and carbonated categories.",
      svg: <CocaColaIcon />
    },
    {
      id: 2,
      title: "Nike",
      desc:
        "<b>NIKE</b> Insight and innovation exploration of running and female apparel. Identified winning concepts for future trends and business segments.",
      svg: <NikeIcon />
    },
    {
      id: 3,
      title: "Kraft",
      desc:
        "<b>KRAFT</b> In-depth insights, innovation development and validation for multiple categories: cream cheese (Philadelphia), chocolate (Milka/ WONKA), coffee (Jacob’s)",
      svg: <KraftIcon />
    },
    {
      id: 4,
      title: "Chanel",
      desc:
        "<b>CHANEL.</b> Exploration and testing of new designs for luxury segment and cosmetics.",
      svg: <ChanelIcon />
    },
    {
      id: 5,
      title: "HP",
      desc:
        "<b>HP</b> B2B and B2C development, validation of slogan and advertising.",
      svg: <HPIcon />
    },
    {
      id: 6,
      title: "Lay's",
      desc:
        "<b>Lay’s</b> Insight and strategic development of all Lay’s brands. Positioning and validation of concepts towards children and families.",
      svg: <FritoLayIcon />
    },
    {
      id: 7,
      title: "Unilever",
      desc:
        "<b>Unilever</b> Innovation and brand development for multiple categories: Savory (Knorr), Ice teas (Lipton), Ice cream (Carte D’Or).",
      svg: <UnileverIcon />
    },
    {
      id: 8,
      title: "PepsiCo",
      desc:
        "<b>PepsiCo</b> International innovation, insight and validation for new snacking products",
      svg: <PepsicoIcon />
    },
    {
      id: 9,
      title: "Mary Kay",
      desc:
        "<b>Mary Kay</b> In-depth analysis of new products and opportunities across 4 continents.",
      svg: <MaryKayIcon />
    },
    {
      id: 10,
      title: "Kelloggs",
      desc:
        "<b>Kelloggs</b> In-depth insight and innovation of product platforms for kids and parents.",
      svg: <KelloggsIcon />
    },
    {
      id: 11,
      title: "Lundbeck",
      desc:
        "<b>Diageo</b> Ethnographic and insight study for new beer and spirit products.",
      svg: <LundbeckIcon />
    },
    {
      id: 12,
      title: "Diageo",
      desc:
        "<b>Diageo</b> Ethnographic and insight study for new beer and spirit products.",
      svg: <DiageoIcon />
    }
  ]
};

class BrandGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedbrand: "",
      modalToggled: false
    };
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }

  nextModal(selected) {
    var index = brandsData.brands.indexOf(selected);
    if (index + 2 > brandsData.brands.length) {
      var nextbrandName = brandsData.brands[0];
    } else {
      var nextbrandName = brandsData.brands[index + 1];
    }
    this.setState({
      selectedbrand: nextbrandName
    });
  }

  prevModal(selected) {
    var index = brandsData.brands.indexOf(selected);
    if (index - 1 < 0) {
      var nextbrandName = brandsData.brands[brandsData.brands.length - 1];
    } else {
      var nextbrandName = brandsData.brands[index - 1];
    }
    this.setState({
      selectedbrand: nextbrandName
    });
  }

  toggleModal(selected) {
    this.setState({
      modalToggled: !this.state.modalToggled,
      selectedbrand: selected
    });
  }

  decideRow(brand) {
    if (brand.id <= 4) {
      return 1;
    } else if (brand.id > 4 && brand.id <= 8) {
      return 2;
    } else {
      return 3;
    }
  }

  render() {
    var list = brandsData.brands.map((brand, index) => (
      <li
        className="brand"
        key={brand.id}
        onClick={() => this.toggleModal(brand)}
      >
        {brand.svg}
        <div className="hidden">
          <h3 dangerouslySetInnerHTML={{ __html: brand.title }} />
          <p>click to find out more</p>
        </div>
      </li>
    ));
    var brandModal = (
      <BrandModal
        brand={this.state.selectedbrand}
        brands={brandsData.brands}
        changebrand={this.toggleModal.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
      />
    );
    var isModalToggled = this.state.modalToggled ? `visible visible${this.decideRow(this.state.selectedbrand)}` : "";
    return (
      <div className="brandGrid">
        <ul className={"brandList " + isModalToggled}>
          {list}
          <BrandModal
            className={isModalToggled}
            brand={this.state.selectedbrand}
            brands={brandsData.brands}
            changebrand={this.toggleModal.bind(this)}
            prevModal={this.prevModal.bind(this)}
            nextModal={this.nextModal.bind(this)}
            closeModal={this.closeModal.bind(this)}
          />
        </ul>
      </div>
    );
  }
}

export default BrandGrid;
