import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const FooterNavigationList = styled.ul`
  margin-bottom: 98px;
  width: 100%;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 155px;
    gap: 24px;
  }

  .footer-items {
    width: 100%;

    @media only screen and (min-width: 768px) {
      width: 198px;
      height: 155px;
      display: flex;
      flex-direction: column;
    }
  }

  .footer-title {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textCard};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .contacts-title {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textCard};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      margin-bottom: 10px;
      font-weight: 300;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;
export const StyledLink = styled(NavLink)`
  display: none;

  @media only screen and (min-width: 768px) {
    margin-bottom:8px;
    display: block;
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.footerLinks};
    transition: color ${({ theme }) => theme.animations.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.colorLink};
    }
  }
`;

export const SocialLink = styled(NavLink)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.colorLink};
    transition: color ${({ theme }) => theme.animations.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.hoverButton};
    }
  }
`;

export const WrapperSocialLink = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
     margin-bottom:4px;
    display: flex;
    
  }
`;
