import { StyledHero } from "./Styled";

const Hero = () => {
  return (
    <StyledHero>
      <div className="containerInHero">
        <h1 className="titleHero">Сяй яскраво наче діамант</h1>
        <span className="spanHero">-40%</span>
        <h3 className="title">Знижка на сережки та браслети</h3>
      </div>
      <h2 className="secondTitle">Нова колекція скоро...</h2>
    </StyledHero>
  );
};

export default Hero;
