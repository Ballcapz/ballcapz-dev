import React from 'react';
import { HeaderBack, HeadingXL, SEO, Layout, TextBody } from '../components';
import styled from 'styled-components';
import { BREAKPOINT } from '../utils/constants';

const remy = (px) => `${px / 16}rem`;
const getFlex = (value) => {
  if (!value) return;

  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};
const getWidth = (value) => {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

const ProjectContainer = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  @media (min-width: 1200px) {
    max-width: ${remy(1640)};
  }
`;

const ProjectRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;

const ProjectColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};

  margin: 1rem auto;

  ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`;

const ProjectCard = styled.article`
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${remy(300)};
  height: ${remy(400)};
  border: 1px solid var(--accent-color);
  margin-left: auto;
  margin-right: auto;
`;

const ProjectLink = styled.a`
  margin-bottom: ${remy(15)};
  text-decoration: underline;

  :hover {
    box-shadow: 0px 9px 0 0 var(--accent-color);
    text-decoration: none;
  }
`;

const ProjectHeader = styled.h2`
  font-size: ${remy(24)};
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: ${remy(18)};
  }
`;

const Projects = () => {
  return (
    <>
      <SEO title="Projects" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Projects</HeadingXL>

        <ProjectContainer>
          <ProjectRow>
            <ProjectColumn sm="8" lg="4">
              <ProjectCard>
                <ProjectHeader>
                  Dotnet Core Console App Dependency Injection
                </ProjectHeader>
                <ProjectLink
                  href="https://github.com/Ballcapz/Console-Application-Dependency-Injection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </ProjectLink>
                <TextBody>
                  Example of adding dependency injection to a Dotnet Core
                  console application
                </TextBody>
              </ProjectCard>
            </ProjectColumn>

            <ProjectColumn sm="8" lg="4">
              <ProjectCard>
                <ProjectHeader>React Portfolio</ProjectHeader>
                <ProjectLink
                  href="https://github.com/Ballcapz/react-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </ProjectLink>
                <TextBody>
                  Simple Portfolio site using functional React and Hooks
                </TextBody>
              </ProjectCard>
            </ProjectColumn>

            <ProjectColumn sm="8" lg="4">
              <ProjectCard>
                <ProjectHeader>React Calendar</ProjectHeader>
                <ProjectLink
                  href="https://github.com/Ballcapz/TCal-React"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </ProjectLink>
                <TextBody>
                  Calendar app using functional React and Hooks
                </TextBody>
              </ProjectCard>
            </ProjectColumn>

            <ProjectColumn sm="8" lg="4">
              <ProjectCard>
                <ProjectHeader>Coffee Grinder Price Scraper</ProjectHeader>
                <ProjectLink
                  href="https://github.com/Ballcapz/Coffee-Grinder-Price-Scraper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </ProjectLink>
                <TextBody>
                  Simple python script to check coffee grinder prices and notify
                  me if the price falls below a certain threshold
                </TextBody>
              </ProjectCard>
            </ProjectColumn>
          </ProjectRow>
        </ProjectContainer>
      </Layout>
    </>
  );
};

export default Projects;
