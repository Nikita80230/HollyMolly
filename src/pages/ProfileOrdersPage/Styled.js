import { styled } from "styled-components";

export const WrapperSubtitleLink = styled.div`
  margin-bottom: 100px;

  .subtitle {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorSubtitle};
  }
`;

export const ContainerProfileOrder = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 697px;
  height: 399px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .subtitleProfile {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.colorProfileSubtitle};
  }

  .description {
    width: 576px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.colorProfileSubtitle};
  }

  .link {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${({ theme }) => theme.colors.colorProfileSubtitle};
  }
`;
