import React from "react";
import "./NavBar.scss";
import Logo from "../../assets/images/logo.png";

class NavBar extends React.Component {
  state = { className: "" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.className) {
        this.setState({ className: "scrollNav" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }
  };
  render() {
    return (
      <nav ref={(r) => (this.ref = r)} className={this.state.className}>
        <div>
          <img src={Logo} href="/#" className="logo" alt="logo"></img>
        </div>
        <ul className="right-item-container">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Quem somos</a>
          </li>
          <li>
            <a href="/#">Serviços</a>
          </li>
          <li>
            <a href="/#">Contato</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
