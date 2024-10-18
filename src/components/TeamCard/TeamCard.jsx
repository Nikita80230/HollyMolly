import { Link } from "react-router-dom";
import { StyledTeamCard } from "./Styled";
import BehanceIcon from "src/assets/icons/behance-icon.svg?react";
import LinkedinIcon from "src/assets/icons/linkedin-icon.svg?react";
import TelegramIcon from "src/assets/icons/telegram-icon.svg?react";
import GmailIcon from "src/assets/icons/google-icon.svg?react";
import GitHubIcon from "src/assets/icons/gitHub-icon.svg?react";

const TeamCard = ({ member }) => {
  const {
    id,
    firstName,
    lastName,
    position,
    linkedin,
    telegram,
    gmail,
    gitHub,
    behance,
    avatar1x,
    avatar2x,
    color,
    showPhoto,
  } = member;

  return (
    <StyledTeamCard key={id}>
      <div className="wrapperCard">
        {showPhoto && (
          <img
            src={avatar1x}
            srcSet={`${avatar1x} 1x, ${avatar2x} 2x`}
            className="styledPhoto"
            alt="Avatar"
          />
        )}
        <div className={showPhoto ? "wrapperContent" : "wrapperContentMargin"}>
          <div style={{ backgroundColor: color }} className="containerName">
            <h2 className="styledName">
              {firstName} {lastName}
            </h2>
          </div>
          <div className="containerContent">
            <h3 className="styledPosition">{position}</h3>
            <div className="wrapperLinks">
              {linkedin && (
                <div className="wrapperIconLink">
                  <LinkedinIcon className="icon" />
                  <Link
                    className="styledLink"
                    to={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkedin}
                  </Link>
                </div>
              )}

              {telegram && (
                <div className="wrapperIconLink">
                  <TelegramIcon className="icon" />
                  <Link
                    className="styledLink"
                    to={telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {telegram}
                  </Link>
                </div>
              )}

              {gmail && (
                <div className="wrapperIconLink">
                  <GmailIcon className="icon" />
                  <Link
                    className="styledLink"
                    to={gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {gmail}
                  </Link>
                </div>
              )}

              {gitHub ? (
                <div className="wrapperIconLink">
                  <GitHubIcon className="icon" />
                  <Link
                    className="styledLink"
                    to={gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {gitHub}
                  </Link>
                </div>
              ) : (
                behance && (
                  <div className="wrapperIconLink">
                    <BehanceIcon className="icon" />
                    <Link
                      className="styledLink"
                      to={behance}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {behance}
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {!showPhoto && (
          <img
            src={avatar1x}
            srcSet={`${avatar1x} 1x, ${avatar2x} 2x`}
            className="styledPhoto"
            alt="Avatar"
          />
        )}
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
