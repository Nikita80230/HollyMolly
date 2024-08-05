import { styled } from "styled-components";

export const WrapperConfirm = styled.section`
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;

  .description {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .link {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
