import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles for the component
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');
`;

// Styled components
const DesignSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: bg-black;
  min-height: 100vh;
  padding: 100px 0;
  font-family: 'Jost', sans-serif;
`;

const TimelineContainer = styled.div`
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
  }
`;

const TimelineContent = styled.div`
  padding: 1.75rem;
  background: #1f1f1f;
  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
  border-radius: 6px;
  color: white;
  transition: 0.4s ease;
  overflow-wrap: break-word !important;
  margin: 1rem;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px #151515, -5px -5px 15px #292929;
  }

  h3 {
    margin: 0 0 10px 0;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-weight: 300;
  }
`;

const TimelineMiddle = styled.div`
  display: none;
  position: relative;
  background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
  width: 3px;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const TimelineCircle = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const TimelineEmpty = styled.div`
  flex: 1;
`;

// Timeline Component
const Timeline = () => {
  const timelineItems = [
    { id: 1, title: "start", content: "Built for advertisers: From awareness to action, manage full-funnel campaigns effortlessly" },
    { id: 2, title: "Experiment", content: "Built for advertisers: From awareness to action, manage full-funnel campaigns effortlessly" },
    { id: 3, title: "Achieve", content: "Built for advertisers: From awareness to action, manage full-funnel campaigns effortlessly" }
  ];

  return (
    <>
      <GlobalStyle />
      <DesignSection>
        <TimelineContainer>
          {/* First Item */}
          <TimelineEmpty />
          
          <TimelineMiddle>
            <TimelineCircle />
          </TimelineMiddle>
          
          <TimelineContent>
            <h3 style={{ fontWeight: 700, fontSize: '2rem', letterSpacing: '0.05em', fontFamily: 'Jost, sans-serif', textTransform: 'uppercase' }}>{timelineItems[0].title}</h3>
            <p>{timelineItems[0].content}</p>
          </TimelineContent>

          {/* Second Item */}
          <TimelineContent>
            <h3 style={{ fontWeight: 700, fontSize: '2rem', letterSpacing: '0.05em', fontFamily: 'Jost, sans-serif', textTransform: 'uppercase' }}>{timelineItems[1].title}</h3>
            <p>{timelineItems[1].content}</p>
          </TimelineContent>
          
          <TimelineMiddle>
            <TimelineCircle />
          </TimelineMiddle>
          
          <TimelineEmpty />

          {/* Third Item */}
          <TimelineEmpty />
          
          <TimelineMiddle>
            <TimelineCircle />
          </TimelineMiddle>
          
          <TimelineContent>
            <h3 style={{ fontWeight: 700, fontSize: '2rem', letterSpacing: '0.05em', fontFamily: 'Jost, sans-serif', textTransform: 'uppercase' }}>{timelineItems[2].title}</h3>
            <p>{timelineItems[2].content}</p>
          </TimelineContent>
        </TimelineContainer>
      </DesignSection>
    </>
  );
};

export default Timeline;