import React from "react";
import "./Header.scss";
import classnames from "classnames";
import NavBar from "../NavBar/NavBar";

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
  UNSAFE_componentWillMount() {
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
      <NavBar
        navbarStyle={classnames("navbar", {
          "navbar--hidden": !this.state.visible,
        })}
      />
    );
  }
}

export default Header;
