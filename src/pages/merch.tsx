import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
import { Layout } from "../components/merchlayout";

const Playlist = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.section`
  display: flex;
`;

const Page = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
`;

const Header = styled.h1`
  font-family: "edosz";
  font-weight: 400;
  text-align: center;
  color: white;
  margin-top: 24px;
`;

const ImgContainer = styled.a`
  width: 50%;
`;

export default ({ data }) => (
  <Layout>
    <Page>
      <Header>Let's all be sad together</Header>
      <Content>
      <ImgContainer href="https://distrokid.com/hyperfollow/nuq/wilting-roses-fleeting-romance">
        <Img fluid={data.broken.childImageSharp.fluid} />
      </ImgContainer>
      </Content>
    </Page>
  </Layout>
);

export const query = graphql`
  {
    broken: file(relativePath: { eq: "Broken.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
