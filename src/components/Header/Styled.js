import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 108px;
  border-bottom: solid black;

  .header {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .title {
    font-family: var(--family-croissantOne);
    font-size: 30px;
    color: ${({ theme }) => theme.colors.accentTxtColor};
  }

  .headerLogo {
    margin: 0 auto;
  }

  .headerLogoImg {
    display: block;
  }
`;
