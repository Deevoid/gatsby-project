import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import Logo from "../images/assets/logo.svg";
import Search from "../images/assets/search.svg";
import Footer from "./Footer/Footer";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Navigation />
        <div className="navbar-module--searchWrapper--1W5QK">
          <div className="searchButtons">
            <button style={{ margin: "0" }} className="searchOpen" type="button" aria-label="Search Open">
              <Search />
            </button>
          </div>
        </div>
      </header>
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};
