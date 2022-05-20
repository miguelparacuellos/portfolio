import ProfileImgSrc from "assets/Profile.jpeg";
import {
  ContentWrapper,
  HomeWrapper,
  PersonalInfoWrapper,
  ProfileImg,
} from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <ProfileImg src={ProfileImgSrc} alt="Author profile's image" />
        <PersonalInfoWrapper>
          <h1>Hi! I'm Miguel Paracuellos</h1>
          <p>A Junior Frontend developer</p>
        </PersonalInfoWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
