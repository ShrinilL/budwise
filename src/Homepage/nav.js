import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="menuBar">
        <a className="active transitionNavBar" href="./">
          Home
        </a>
        <a className="transitionNavBar" href="./YoutubeEmbed">
          Finance Hub
        </a>
        <a className="transitionNavBar" href="./budget">
          Budget
        </a>
        {/* <a className="transitionNavBar">About</a>
                <a className="transitionNavBar">Budget</a> */}
        <a className="transitionNavBar" href="./login">
          Log In
        </a>
        <a className="transitionNavBar" href="./signup">
          Sign Up
        </a>
      </nav>
    </>
  );
};

export default Nav;
