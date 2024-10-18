import { useEffect } from "react";
import Container from "src/components/Container/Container";
import ListTeam from "src/components/ListTeam/ListTeam";
import team from "src/data/team";
import { WrapperAboutUsPage } from "./Styled";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <WrapperAboutUsPage>
        <h1 className="title">Про нас</h1>
        <ListTeam team={team} />
      </WrapperAboutUsPage>
    </Container>
  );
};

export default AboutUsPage;
