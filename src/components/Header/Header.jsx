import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.png";
import classnames from "classnames";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollpos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollpos;

    this.setState({
      prevScrollpos: currentScrollpos,
      visible,
    });
  };

  render() {
    return (
      <nav
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible,
        })}
      >
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

export default Header;
