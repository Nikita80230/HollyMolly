import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const FooterNavigation = styled.ul`
  /* padding: 0 65px 0 87px; */
  margin: 0 auto;
  max-width: 1154px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  /* gap: 194px; */

  .footer-title {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    margin-bottom: 33px;
    font-weight: 300;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .footer-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
export const StyledLink = styled(NavLink)`
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
`;

export const SocialLink = styled(NavLink)`
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
`;

export const WrapperSocialLink = styled.div`
  display: flex;
  gap: 4px;
`;

export const LowerBlock = styled.div`
  padding: 19px 64px 15px 64px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  .text {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;
  }
  .lower-links {
    display: flex;
    gap: 45px;
  }
`;

export const StyledLowerLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.familyRoboto};
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
