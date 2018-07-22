import React, { Component } from "react";
import AreasModal from "./areasModal";
import CocaColaIcon from "svg-react-loader?name=CocaColaIcon!./../../assets/img/clients/clientCocaCola.svg";
import NikeIcon from "svg-react-loader?name=NikeIcon!./../../assets/img/clients/clientNike.svg";
import KraftIcon from "svg-react-loader?name=KraftIcon!./../../assets/img/clients/clientKraft.svg";
import ChanelIcon from "svg-react-loader?name=ChanelIcon!./../../assets/img/clients/clientChanel.svg";
import HPIcon from "svg-react-loader?name=HPIcon!./../../assets/img/clients/clientHP.svg";
import FritoLayIcon from "svg-react-loader?name=FritoLayIcon!./../../assets/img/clients/clientFritoLay.svg";
import UnileverIcon from "svg-react-loader?name=UnileverIcon!./../../assets/img/clients/clientUnilever.svg";
import PepsicoIcon from "svg-react-loader?name=PepsicoIcon!./../../assets/img/clients/clientPepsico.svg";
import KelloggsIcon from "svg-react-loader?name=KelloggsIcon!./../../assets/img/clients/clientKelloggs.svg";
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
      desc:"<b>Unilever</b> Innovation and brand development for multiple categories: Savory (Knorr), Ice teas (Lipton), Ice cream (Carte D’Or).",
      svg: <UnileverIcon />
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
    if (window.innerWidth < 1000) {
      this.setState({
        modalToggled: true,
        selectedbrand: selected
      });
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
          <p dangerouslySetInnerHTML={{ __html: brand.desc }} />
        </div>
      </li>
    ));
    var brandModal = (
      <AreasModal
        brand={this.state.selectedbrand}
        brands={brandsData.brands}
        changebrand={this.toggleModal.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
      />
    );
    var brandList = <ul className={"brandList "}>{list}</ul>;

    var isModalToggled = this.state.modalToggled ? brandModal : null;
    return (
      <div className="brandGrid">
        {brandList}
        {isModalToggled}
      </div>
    );
  }
}

export default BrandGrid;
