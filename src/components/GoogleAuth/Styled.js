import { styled } from "styled-components";

export const ButtonGoogle = styled.button`
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 59px;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 5px;
  padding: 15px 5px;
  width: 310px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primaryBgColor};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.20833;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  transition: color ${({ theme }) => theme.animations.transition},
    box-shadows ${({ theme }) => theme.animations.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  @media (max-width: 564px) {
    margin-top: 24px;
    margin-bottom: 8px;
    margin-left: 13px;
    padding: 11px 5px;
    width: 309px;
    height: 52px;
  }
`;
