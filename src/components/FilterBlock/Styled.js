import styled from "styled-components";

export const StyledFilterBlock = styled.div`
  margin-bottom: 36px;

  .filterTitle {
    margin-bottom: 36px;
  }

  .checkboxSection {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .checkboxLabel {
    display: flex;
    align-items: center;
    gap: 13px;

    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .fakeCheckbox {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};

    transition: ${({ theme }) => theme.animations.transition};
  }

  .checkboxIcon {
    opacity: 0;

    transition: ${({ theme }) => theme.animations.transition};
  }

  .commonCheckbox {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  .commonCheckbox:checked + .fakeCheckbox .checkboxIcon {
    opacity: 1;
  }

  .commonCheckbox:checked + .fakeCheckbox {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }

  .textCheckbox {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.checkboxText};
    text-transform: capitalize;
  }
`;
