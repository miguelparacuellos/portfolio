// Shared internal imports

// Internal imports
import { Flex } from "components";
import { Section, SkillsWrapper, Title, WhiteCard } from "./styles";
import { MainSkillRowParams } from "./ts";

const Skills = () => {
  // RENDERERS
  const renderMainSkillRow = ({ title }: MainSkillRowParams) => (
    <Flex>
      <h2>{title}</h2>
    </Flex>
  );

  const renderMainSkills = () => (
    <Section
      flexFlow="column wrap"
      alignItems="center"
      justifyContent="space-around"
    >
      <Title>Main skills</Title>
      <WhiteCard flexFlow="column wrap" alignItems="center" columnGap="1rem">
        {renderMainSkillRow({
          title: "React",
          percentage: 85,
          startColor: "#78909c",
          endColor: "#546e7a",
        })}
      </WhiteCard>
    </Section>
  );

  return (
    <SkillsWrapper
      flexFlow="column wrap"
      alignItems="center"
      justifyContent="space-around"
    >
      {renderMainSkills()}
    </SkillsWrapper>
  );
};

export default Skills;
