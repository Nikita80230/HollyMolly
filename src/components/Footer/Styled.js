import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LowerBlock = styled.div`
  margin-bottom: 53px;
  padding: 10px 22px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.backgroundLowerBlockMobile};

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 19px 64px 15px 64px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
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
