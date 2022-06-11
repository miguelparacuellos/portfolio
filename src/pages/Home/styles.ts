// Third party libraries
import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const HomeWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  column-gap: 2rem;
`;

export const ProfileImg = styled.img`
  height: 20rem;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: 60%;
`;

export const InfoLinksWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const ResumeButton = styled.button`
  font-size: 1rem;
  color: white;
  background-color: #0d47a1;

  border-radius: 1.5rem;
  border: 1px solid #0d47a1;

  padding: 1rem 2rem;

  transition: background-color 0.4s ease, color 0.4s ease;

  &:hover,
  &:active {
    color: #0d47a1;
    background-color: white;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 12px 16px 0 #bdbdbd, 0 17px 40px 0 #9e9e9e;
  }
`;

export const CVFile = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const LinkedInButton = styled(BsLinkedin)`
  background-color: white;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover,
  &:active {
    border: 1px solid #0d47a1;
  }

  &:active {
    box-shadow: 0 5px 7px 0 #bdbdbd, 0 10px 20px 0 #9e9e9e;
  }
`;

export const GithubButton = styled(BsGithub)`
  background-color: white;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover,
  &:active {
    border: 1px solid #0d47a1;
  }

  &:active {
    box-shadow: 0 5px 7px 0 #bdbdbd, 0 10px 20px 0 #9e9e9e;
  }
`;
