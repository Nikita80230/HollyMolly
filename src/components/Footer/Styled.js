import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Footer = styled.footer``;

export const FooterNavigation = styled.ul`
  margin-bottom: 60px;
  display: flex;
  gap: 194px;

  .footer-title {
    margin-bottom: 33px;
    font-family: var(--familyNunito);
    font-weight: 400;
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
  font-family: var(--familyRoboto);
  font-weight: 400;
  font-size: 18px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const SocialLink = styled(NavLink)`
  font-family: var(--familyRoboto);
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.colorLink};
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
    font-family: var(--familyRoboto);
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
  font-family: var(--familyRoboto);
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
