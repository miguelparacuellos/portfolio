import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 3rem;

  width: 50%;
`;

export const ProfileImg = styled.img`
  height: 20rem;
  border-radius: 60%;
  box-shadow: 0.2rem 0.5rem 1.5rem #9e9e9e;
`;

export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  row-gap: 1rem;
`;

export const Gretting = styled.p`
  font-size: 2rem;
  
  padding: 0 1rem;
  margin 0;
`;

export const AuthorName = styled.h1`
  font-size: 3rem;
  padding: 0 1rem;
  margin: 0;
`;

export const ShortBio = styled.p`
  font-size: 1rem;

  padding: 0 1rem;
  margin: 0;
`;
