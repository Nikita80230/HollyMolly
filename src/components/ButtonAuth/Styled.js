import { styled } from "styled-components";

export const StyledButton = styled.button`
 border-radius: 5px;
    border: transparent;
    padding: 15px 5px;
     width: ${(props) => props.width || 'auto'};
    height: 60px;
    background: ${({ theme }) => theme.colors.accentColor};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    transition: background ${({ theme }) => theme.animations.transition},
      box-shadows ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.activeBgColor};
    }
  
`