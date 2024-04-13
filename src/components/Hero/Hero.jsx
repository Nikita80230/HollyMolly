import { StyledHero } from "./Styled";

const Hero = () => {
  return (
    <StyledHero>
      <div className="wrapperImage">
        <p className="heroImageText">Shine bright like a dimond</p>
        <h1 className="heroTitle">
          <span className="spanTitle">40% </span>
          <br></br>discount on all earrings and bracelets
        </h1>
      </div>
      <div className="wrapperSecondImage">
        <h2 className="heroSubtitle">New Collection</h2>
        <p className="textSubtitle">will be soon...</p>
      </div>
    </StyledHero>
  );
};

export default Hero;
