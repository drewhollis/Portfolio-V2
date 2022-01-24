import { useEffect, useRef } from "react";
import { init } from "ityped";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span } from "./HeroStyles";

export default function Hero() {
const textRef = useRef();

 useEffect(() => {
   init(textRef.current, {
    showCursor: true,
    backDelay: 1500,
    backSpeed: 60,
    strings: [
     "Front End Development",
     "UI/UX Design",
     "HTML/CSS/Javascript",
     "React",
    ],
   });
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My Portfolio <br />
          My Skills Include <br />
          {/* <Span ref={textRef}></Span> */}
        </SectionTitle>
        <SectionText>
          If you have any web development needs feel free to contact me by
          email. Meanwhile, see if I have what you are looking for by checking
          out my featured works.
        </SectionText>
        <Button href="#projects">View My Featured Projects</Button>
      </LeftSection>
    </Section>
  );
}
