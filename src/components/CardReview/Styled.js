import { styled } from "styled-components";

export const StyledContainer = styled.li`
  border-radius: 10px;
  padding: 25px 20px;
  width: 410px;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y:auto;
  overflow-x: hidden;

   &::-webkit-scrollbar {
    width: 5px;
    height: auto;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 10px;
  }

  .wrapperNameStars {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .name {
    font-weight: 600;
    font-size: 30px;
  }

  .review {
    margin-bottom: 36px;
    font-weight: 400;
    font-size: 30px;
  }

  .dateCreated {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    margin-left: 250px;
    white-space:nowrap;
  }

  @media (max-width: 564px) {
    padding: 16px;
    width: 100%;
    height: 156px;

    .wrapperNameStars {
      margin-bottom: 16px;
    }
    .name {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.2;
    }

    .review {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 1.2;
    }

    .dateCreated {
      font-size: 16px;
      line-height: 1.25;
      margin-left: 0;
    }
  }
`;
