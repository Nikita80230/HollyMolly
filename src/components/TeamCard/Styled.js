import { styled } from "styled-components";

export const StyledTeamCard = styled.li`
  .wrapperCard {
    margin-bottom: 30px;
    display: flex;
    gap: 24px;
    width: 945px;
  }

  .styledPhoto {
    border-radius: 4px;
    width: 320px;
    height: 350px;
  }

  .wrapperContent {
    position: relative;
  }

  .wrapperContentMargin {
    position: relative;
    margin-left: 220px;
  }

  .containerName {
    position: absolute;
    top: 0;
    left: 22px;
    padding: 23px;
    border-radius: 5px;

    height: 88px;
  }

  .styledName {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 40px;
    line-height: 1.2;
    text-align: center;
  }

  .containerContent {
    margin-top: 71px;
    border-radius: 4px;
    width: 781px;
    height: 279px;
    padding: 42px 54px 36px 55px;
    display: flex;
    flex-direction: column;
    box-shadow: ${({ theme }) => theme.shadows.boxShadowCardTeam};
  }

  .styledPosition {
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 32px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .wrapperLinks {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .styledLink {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .wrapperIconLink {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }

  .icon {
    width: 32px;
    height: 32px;
    path {
      stroke: ${({ theme }) => theme.colors.primaryTxtColor};
      fill: ${({ theme }) => theme.colors.primaryBgColor};
    }
  }
`;
