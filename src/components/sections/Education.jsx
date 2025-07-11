import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My education has been a journey of self-discovery eductional details
          are as follows.
        </Desc>

        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard key={`education-${index}`} education={item} />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default Education;
