import React, { useState, useEffect } from "react";
import "./Header.scss";
import classnames from "classnames";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const Scrollpos = prevScrollpos;

    const currentScrollpos = window.pageYOffset;
    const visible = Scrollpos > currentScrollpos;

    setPrevScrollpos(currentScrollpos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <NavBar
      navbarStyle={classnames("navbar", {
        "navbar--hidden": !visible,
      })}
    />
  );
};
// class Header extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       prevScrollpos: window.pageYOffset,
//       visible: true,
//     };
//   }
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }
//   UNSAFE_componentWillMount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     const { prevScrollpos } = this.state;

//     const currentScrollpos = window.pageYOffset;
//     const visible = prevScrollpos > currentScrollpos;

//     this.setState({
//       prevScrollpos: currentScrollpos,
//       visible,
//     });
//   };

//   render() {
//     return (
//       <NavBar
//         navbarStyle={classnames("navbar", {
//           "navbar--hidden": !this.state.visible,
//         })}
//       />
//     );
//   }
// }
export default Header;
