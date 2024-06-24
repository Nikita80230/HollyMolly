import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const WrapperFooterNavigation = styled.div`
  /* margin-bottom: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    /* margin-bottom: 64px; */
  }

  @media only screen and (min-width: 1440px) {
    /* margin-bottom: 98px; */
    width: 1127px;
    height: 125px;
  }
`;

export const FooterNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  @media only screen and (min-width: 1440px) {
    gap: 145px;
  }

  .footer-items {
    @media only screen and (min-width: 1440px) {
      /* width: 198px;
      height: 155px; */
      width: 173px;
    }
  }

  .wrapper-title-footer-nav {
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    width: 132px;
    height: 32px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 16px;
      justify-content: start;
      align-items: start;
      width: 92px;
      height: 22px;
    }

    @media only screen and (min-width: 1440px) {
      /* width: 198px;
      height: 25px; */
      margin-bottom: 5px;
    }
  }

  .icon-chevron {
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  .footer-title {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.footerSubtitle};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media only screen and (min-width: 1440px) {
      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      font-weight: 700;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .contacts-title-wrapper {
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    width: 132px;
    height: 32px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 16px;
      justify-content: start;
      align-items: start;
      width: 92px;
      height: 22px;
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 5px;
      width: 198px;
      height: 25px;
    }
  }
`;
export const StyledLink = styled(NavLink)`
  display: block;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.footerLinks};
  transition: color ${({ theme }) => theme.animations.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.colorLink};
  }

  @media only screen and (min-width: 768px) {
    text-align: left;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;

export const SocialLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorLink};
  white-space: nowrap;
  transition: color ${({ theme }) => theme.animations.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.hoverButton};
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1440px) {
    gap: 5px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;

export const WrapperSocialLink = styled.div`
  margin-bottom: 10px;
  display: flex;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 5px;
  }

  .icon {
    @media only screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }

    @media only screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }
`;
