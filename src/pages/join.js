import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const JoinPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{ backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0 }}>
          <h1 className="post-title">Get in Touch</h1>
          <p>This is the Join page page &rarr;</p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};
export default JoinPage;
export const pageQuery = graphql`
  query JoinPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
