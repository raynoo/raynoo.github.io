import "./index.css";

import Helmet from "react-helmet";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Header = () => (
  <div
    style={{
      background: "#EF6461",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: "#FFFCFC",
            textDecoration: "none"
          }}
        >
          RS
        </Link>
      </h1>
    </div>
  </div>
);
const Footer = () => (
  <footer>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1rem"
      }}
    >
      ® 2017
    </div>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Renu Srinivasan | 👩🏻‍💻"
      meta={[
        { name: "description", content: "renu srinivasan" },
        {
          name: "keywords",
          content: "renu srinivasan, software engineer, react, javascript"
        }
      ]}
    />
    <Header />
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          minHeight: "33rem",
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {children()}
      </div>
      <Footer />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
