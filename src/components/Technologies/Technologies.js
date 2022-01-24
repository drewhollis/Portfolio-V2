import React from "react";
import { DiJsBadge, DiDatabase } from "react-icons/di";
import { AiOutlineCloudServer } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Skills</SectionTitle>
    <SectionText>
      I have worked with a modern teck stack for front end development as well
      as NoSQL databases and AWS.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <DiJsBadge size="3rem" />
          <ListTitle>Front End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, React.js, Next.js, Styled Components , SCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiDatabase size="3rem" />
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            Google Firebase and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <AiOutlineCloudServer size="3rem" />
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
