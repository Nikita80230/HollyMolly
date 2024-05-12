import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 32px 32px 40px 32px;
  width: 653px;
  height: 170px;
  box-shadow: inset 0 0 50px 0 rgba(169, 181, 237, 0.3),
    0 4px 20px 0 rgba(4, 9, 34, 0.15);
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .title {
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 32px;

    color: ${({ theme }) => theme.colors.descriptionModal};
  }

  .description {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.descriptionModal};
  }
  .buttonModal {
    position: absolute;
    top: 30px;
    right: 30px;
    background-color: transparent;
    border: transparent;
  }
`;
