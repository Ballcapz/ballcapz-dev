import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
          Hi! I'm Zach and I am a Software Engineer. I have been working
          as a Software Engineering Consultant for about a year, and have
          been on a few projects, everything including large-scale C#/.NET enterprise
          apps, down to a Vue.js Reporting SPA with a few pages. Recently I've
          been passionate about learing Elixir, Erlang/OTP, and Elm, and fascinated by
          all of the principles that come with learning those languages and ecosystems.
          <br />
          <br />
            In my time off from programming, I enjoy making, roasting, and drinking coffee;
            as well as spending time outdoors doing whatever happens to catch my eye
            for the day. I also enjoy growing my own sustainable vegetables and herbs
            for cooking!
        </TextBody>
        <Button href="mailto:zachary.a.johnson.10&#64;gmail.com">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/mn-landscape.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
