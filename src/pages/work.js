import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const WorkPage = ({ data: { site } }) => {
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
          <p>This is the Work page page &rarr;</p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};
export default WorkPage;
export const pageQuery = graphql`
  query WorkPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
