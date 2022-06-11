// Shared internal imports
import authorImg from "assets/Profile.jpeg";
import cv from "assets/CV.pdf";

// Internal imports
import {
  CVFile,
  GithubButton,
  HomeWrapper,
  InfoLinksWrapper,
  InfoWrapper,
  LinkedInButton,
  ProfileImg,
  ProfileWrapper,
  ResumeButton,
} from "./styles";

const Home = () => {
  // HANDLERS
  const handleOpenLinkedin = () => {
    window.open("https://www.linkedin.com/in/miguel-paracuellos-inf", "_blank");
  };

  const handleOpenGithub = () => {
    window.open("https://github.com/miguelparacuellos", "_blank");
  };

  // RENDERERS
  const renderInfoLinks = () => (
    <InfoLinksWrapper>
      <ResumeButton>
        <CVFile href={cv} download="MiguelParacuellos_Resume">
          Resumé
        </CVFile>
      </ResumeButton>
      <LinkedInButton
        size={24}
        color="#0d47a1"
        onClick={handleOpenLinkedin}
      ></LinkedInButton>
      <GithubButton size={24} color="#0d47a1" onClick={handleOpenGithub} />
    </InfoLinksWrapper>
  );

  const renderAuthorSummary = () => (
    <InfoWrapper>
      <h1>Hi there, I'm Miguel Paracuellos!</h1>
      <p>
        A Junior Full-Stack developer passionate about creating interactive
        applications and experiences on the web.
      </p>
      {renderInfoLinks()}
    </InfoWrapper>
  );

  return (
    <HomeWrapper>
      <ProfileWrapper>
        <ProfileImg src={authorImg} alt="Author's image" />
        {renderAuthorSummary()}
      </ProfileWrapper>
    </HomeWrapper>
  );
};

export default Home;
