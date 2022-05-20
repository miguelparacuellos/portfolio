import ProfileImgSrc from "assets/Profile.jpeg";
import {
  AuthorName,
  ContentWrapper,
  Gretting,
  HomeWrapper,
  PersonalInfoWrapper,
  ProfileImg,
  ShortBio,
} from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <ProfileImg src={ProfileImgSrc} alt="Author profile's image" />
        <PersonalInfoWrapper>
          <Gretting>Hi there!</Gretting>
          <AuthorName>I'm Miguel Paracuellos</AuthorName>
          <ShortBio>
            A Front-End Web Developer passionate about creating interactive
            applications and experiences on the web.
          </ShortBio>
        </PersonalInfoWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
