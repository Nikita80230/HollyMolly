import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const WrapperFooterNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1127px;
  height: 125px;

  @media (max-width: 1239px) {
    width: 720px;
    height: 120px;
  }

  @media (max-width: 564px) {
    width: 100%;
    height: 214px;
  }
`;

export const FooterNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 145px;

  @media (max-width: 1239px) {
    gap: 0;
  }

  @media (max-width: 564px) {
    gap: 24px 13px;
  }

  .footer-items {
    width: 173px;

    @media (max-width: 1239px) {
      width: 180px;
    }
    @media (max-width: 564px) {
      /* width: 161px; */
      width: 47%;
    }
  }

  .footer-title {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .styledSpan {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    cursor: pointer;
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

export const NotificationSupport = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 62px 20px 25px 20px;
  width: 591px;
  height: 210px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  position: relative;

  .iconClose {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .description {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
  }

  .buttonModal {
    position: absolute;
    top: 14px;
    right: 20px;
    background-color: transparent;
    border: transparent;
  }

  @media (max-width: 564px) {
    padding: 56px 10px 20px 10px;
    width: 335px;
    height: 178px;

    .iconClose {
      width: 16px;
      height: 16px;
    }

    .description {
      margin-bottom: 5px;
      font-size: 15px;
      line-height: 1.46667;
    }

    .buttonModal {
      top: 10px;
      right: 10px;
    }
  }
`;
