import React from 'react'
import { graphql } from 'gatsby'
import {
    HeaderBack,
    HeadingXL,
    HeadingL,
    SEO,
    Layout,
    ButtonLink,
    TextBody
} from '../components'
import styled from 'styled-components'

const remy = px => `${px / 16}rem`
const getFlex = (value) => {
    if (!value) return

    let flex = value / 12 * 100
    return `flex: 0 0 ${flex}%;`
}
const getWidth = (value) => {
    if (!value) return

    let width = value / 12 * 100
    return `width: ${width}%;`
}

const ProjectContainer = styled.div`
    padding-right: ${remy(15)};
    padding-left: ${remy(15)};
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    @media (min-width: 576px) {
        max-width: ${remy(540)}
    }

    @media (min-width: 768px) {
        max-width: ${remy(720)}
    }

    @media (min-width: 992px) {
        max-width: ${remy(9600)};
    }
    
    @media (min-width: 1200px) {
        max-width: ${remy(1140)};
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
    justify-content: center;
    align-items: center;
    width: ${remy(300)};
    height: ${remy(400)};
    border: 1px solid var(--accent-color);
`;

const ProjectLink = styled.a`
    margin-bottom: ${remy(15)};
    :hover {
        box-shadow: 0px 9px 0 0 var(--accent-color);
    }
`;

const Projects = ({ data }) => {
    return (
        <>
            <SEO title="Projects" />
            <HeaderBack />
            <Layout>
                <HeadingXL>Projects</HeadingXL>

                <ProjectContainer>
                    <ProjectRow>
                        <ProjectColumn sm='8' lg='6'>
                            <ProjectCard>
                                <HeadingL>Dotnet Core Console App Dependency Injection</HeadingL>
                                <ProjectLink
                                    href="https://github.com/Ballcapz/Console-Application-Dependency-Injection"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github Link
                                </ProjectLink>
                                <TextBody>
                                    Example of adding dependency injection to a Dotnet Core console application
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