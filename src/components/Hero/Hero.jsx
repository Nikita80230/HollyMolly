import { StyledHero } from "./Styled";

const Hero = () => {
  return (
    <StyledHero>
      <div className="wrapperImage">

        <h1 className="heroTitle">
          <span className="spanTitle">До -40% </span>
          <br></br>Знижка на сережки <br></br> та Браслети
        </h1>
      <p className="heroImageText">Сяй яскраво наче діамант</p> 
      </div>
      <div className="wrapperSecondImage">
        <div className="wrapperHeroSubtitle">
        <h2 className="heroSubtitle">Нова Колекція</h2>
          <p className="textSubtitle">незабаром...</p>
          </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
