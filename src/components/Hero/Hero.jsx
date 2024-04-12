import { StyledHero } from "./Styled";

export const Hero = () => {
  return (
    <StyledHero>
      <div className="wrapper-image">
        <p className="hero-image-text">Shine bright like a dimond</p>
        <h1 className="hero-title">
          <span className="span-title">40% </span>
          <br></br>discount on all earrings and bracelets
        </h1>
      </div>
      <div className="wrapper-second-image">
        <h2 className="hero-subtitle">New Collection</h2>
        <p className="text-subtitle">will be soon...</p>
      </div>
    </StyledHero>
  );
};
