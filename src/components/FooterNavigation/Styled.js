import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const WrapperFooterNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1127px;
  height: 125px;

  @media (max-width: 564px) {
    width:100%;
    height: 214px;
  }
`;

export const FooterNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 145px;

  @media (max-width: 564px) {
    gap: 24px 13px;
  }

  .footer-items {
    width: 173px;
    @media (max-width: 564px) {
      /* width: 161px; */
      width:48%;
    }
  }

  .footer-title {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    @media (max-width: 564px) {
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const SocialLink = styled(NavLink)`
  display: flex;
  gap: 5px;
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const WrapperSocialLink = styled.div`
  display: flex;
  margin-bottom: 5px;

  .icon {
    width: 24px;
    height: 24px;
  }
`;