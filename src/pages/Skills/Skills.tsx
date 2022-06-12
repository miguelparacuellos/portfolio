// Shared internal imports
import { Card } from "components";

// Internal imports
import { Section, SkillsRow, SkillsWrapper, Title } from "./styles";

const Skills = () => {
  // RENDERERS
  const renderMainSkills = () => (
    <Section>
      <Title>Main Skills</Title>
      <Card backgroundColor="white">
        <SkillsRow>
          <h2>React</h2>
        </SkillsRow>
        <SkillsRow>
          <h2>Typescript</h2>
        </SkillsRow>
        <SkillsRow>
          <h2>NodeJS</h2>
        </SkillsRow>
      </Card>
    </Section>
  );

  return <SkillsWrapper>{renderMainSkills()}</SkillsWrapper>;
};

export default Skills;
