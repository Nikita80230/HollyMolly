import styled from "styled-components";

export const StyledFilterBlock = styled.div`
  margin-bottom: 40px;

  .filterTitle {
    margin-bottom: 24px;
  }

  .checkboxSection {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .checkboxLabel {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .fakeCheckbox {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid rgba(119, 120, 119, 0.47);

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
    background-color: #939fdf;
  }

  .textCheckbox {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.checkboxText};
    text-transform: capitalize;
  }
`;
