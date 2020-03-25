import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';
import Nav from '../components/Nav';
import Page from '../components/Page';
import {column} from '../styles/mixins';
import {colors, spacing} from '../styles/vars';

import {HeroSection, WorkSection} from '../components/home/sections';
import WorkList from '../components/home/WorkList';

// for simplicity on a custom page,
// split each section into a stateless component
// then imported them into the Index component

const Main = styled.main`
    background-color: ${colors.dark};
    color: #fefefe;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroText = styled.h1`
    font-size: 90px;
    line-height: 1.18em;
    font-weight: 700;
    color: ${colors.accent};

    @media (max-width: 991px) {
        margin-top: 0px;
        font-size: 70px;
    }

    @media (max-width: 767px) {
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 50px;
    }

    @media (max-width: 479px) {
        font-size: 32px;
        line-height: 1.2em;
    }
`;

const Tagline = styled.h2`
    font-size: 70px;
    font-weight: 500;
    line-height: 1.1em;

    @media (max-width: 991px) {
        max-width: none;
        font-size: 40px;
    }

    @media (max-width: 479px) {
        margin-top: -8px;
        font-size: 20px;
        line-height: 1.3em;
        font-weight: 600;
    }
`;

const SelectWork = styled.h2`
    width: 100%;
    margin-top: 0px;
    margin-bottom: 40px;
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 48px;
    line-height: 1.1em;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 991px) {
        font-size: 40px;
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
        font-size: 32px;
    }
`;

// TODO: change font
// TODO: add back in navigation

const description = 'Strategic Products';
const Index = () => (
    <Page description={description} image={'/static/images/avatar.jpg'} title={`Dan Morrison - ${description}`}>
        <Nav background-color={colors.dark} />
        <Main>
            <HeroSection className="home">
                <HeroText>Dan Morrison</HeroText>
                <Tagline>
                    Curious product leader with experience turning strategic imperatives into digital products.
                </Tagline>
            </HeroSection>
            <WorkSection>
                <SelectWork>Select Projects</SelectWork>
                <WorkList></WorkList>
            </WorkSection>
        </Main>
    </Page>
);

export default Index;

// const Content = styled.div`
//     ${column}
//     margin-bottom: ${spacing.normal};
//     padding: ${spacing.normal};
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `;

// const Quote = styled.blockquote`
//   font-style: italic;
//   margin: 2em 0;
//   padding: 0 1em 0 0;
//   position: relative;

//   @media (min-width: 737px) {
//     left: -2.25em;
//     margin: 0 0 4em;
//     padding: 0 1.5em 0 2.25em;
//   }
// `;

// const Bio = styled.h3`
//   font-size: 1.2em;
//   margin: 0;

//   :before {
//     color: #ff5252;
//     content: "“";
//     display: none;
//     font-size: 3em;
//     left: 0.05em;
//     line-height: 1;
//     position: absolute;
//     top: -0.05em;
//   }

//   @media (min-width: 737px) {
//     :before {
//       display: block;
//     }
//   }
// `;

// const Subtitle = styled.h2`
//   font-style: italic;
//   margin: 0;
//   color: ${colors.accent};
//   letter-spacing: 0.03;
// `;

// const Title = styled.h1`
//   font-size: 1.65em;
//   letter-spacing: 0.03em;
//   text-transform: uppercase;
//   line-height: 1.35;
//   margin: 0;
//   font-weight: bold;

//   @media (min-width: 737px) {
//     font-size: 2.3em;
//   }
// `;

// const Container = styled.div`
//   padding: 30px 0;

//   @media (min-width: 737px) {
//     padding: 30px 0 80px;
//   }
// `;

// const Action = styled.h4`
//   font-style: italic;
//   letter-spacing: 0.05em;
//   margin: 1em 0 0;
//   text-transform: uppercase;
// `;

// const ActionLink = styled(Link)`
//   color: ${colors.accent};
//   transition: all 0.15s ease;

//   :after {
//     content: " →";
//   }

//   :hover {
//     color: white;

//     :after {
//       color: white;
//     }
//   }
// `;

// const description = "Strategic Products";

// const Index = () => (
//   <Page
//     description={description}
//     image={"/static/images/avatar.jpg"}
//     title={`Dan Morrison - ${description}`}
//   >
//     <Main>
//       <Content>
//         <Container>
//           <Subtitle>{"Strategic Imperatives to Digital Products"}</Subtitle>
//           <Title>{"Dan Morrison"}</Title>
//         </Container>
//         <Quote>
//           <Bio>
//             {
//               "Curious product management leader with a results-driven approach to designing and shipping all things digital. Currently leading New Product Development at LiveSafe."
//             }
//           </Bio>
//         </Quote>
//         <Action>
//           {"Check out his "}
//           <ActionLink slug={"notes"}>{"blog"}</ActionLink>
//         </Action>
//         <Action>
//           {"These are his "}
//           <ActionLink slug={"work"}>{"projects"}</ActionLink>
//         </Action>
//         <Action>
//           {"Find out more "}
//           <ActionLink slug={"about"}>{"about him"}</ActionLink>
//         </Action>
//       </Content>
//     </Main>
//   </Page>
// );
// export default Index;
