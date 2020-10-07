import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <nav className="navigation">
    <Link activeClassName="active" className="about" to="/about">
      About
    </Link>
    <Link activeClassName="active" className="insight" to="/insight">
      Insights
    </Link>
    <Link activeClassName="active" className="work" to="/work">
      Work
    </Link>
    <Link activeClassName="active" className="blog" to="/blog">
      Blog
    </Link>
    <Link activeClassName="active" className="join" to="/join">
      Join{" "}
    </Link>
    <Link activeClassName="active" className="contact" to="/contact">
      Contact
    </Link>
  </nav>
);
