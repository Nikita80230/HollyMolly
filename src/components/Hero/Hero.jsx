import { StyledHero } from "./Styled";

const Hero = () => {
  return (
    <StyledHero>
      <div className="wrapperImage">
        <p className="heroImageText">Сяй яскраво наче діамант</p>
        <h1 className="heroTitle">
          <span className="spanTitle">40% </span>
          <br></br>знижка на сережки та браслети
        </h1>
      </div>
      <div className="wrapperSecondImage">
        <h2 className="heroSubtitle">Нова Колекція</h2>
        <p className="textSubtitle">незабаром...</p>
      </div>
    </StyledHero>
  );
};

export default Hero;
