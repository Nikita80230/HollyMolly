import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const FooterNavigationList = styled.ul`
  margin-bottom: 98px;
  width: 100%;
  height: 19px;
  display: flex;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    padding-right:77px;
    padding-left:77px;
    margin-bottom: 64px;
    height: 126px;
    gap: 32px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 98px;
    padding-right:223px;
    padding-left:223px;
    height: 155px;
    gap: 24px;
  }

  .footer-items {
    width: 100%;

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1440px) {
      width: 198px;
      height: 155px;
    }
  }

  .footer-title {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textCard};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      margin-bottom: 16px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }

    @media only screen and (min-width: 1440px) {
      font-weight: 300;
      font-size: 18px;
    }
  }

  .contacts-title {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textCard};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      margin-bottom: 16px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 10px;
      font-weight: 300;
      font-size: 18px;
    }
  }
`;
export const StyledLink = styled(NavLink)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.footerLinks};
    transition: color ${({ theme }) => theme.animations.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.colorLink};
    }
  }

  @media only screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const SocialLink = styled(NavLink)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.colorLink};
    white-space: nowrap;
    transition: color ${({ theme }) => theme.animations.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.hoverButton};
    }
  }

  @media only screen and (min-width: 1440px) {
    gap: 8px;
    font-size: 18px;
  }
`;

export const WrapperSocialLink = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
    display: flex;
    
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 4px;
  }

  .icon {
    @media only screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }

    @media only screen and (min-width: 1440px) {
      width: 32px;
      height: 32px;
    }
  }
`;
