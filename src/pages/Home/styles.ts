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
  column-gap: 3rem;
`;

export const ProfileImg = styled.img`
  height: 20rem;
  border-radius: 60%;
  box-shadow: 0.2rem 0.5rem 1.5rem #9e9e9e;
`;

export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
