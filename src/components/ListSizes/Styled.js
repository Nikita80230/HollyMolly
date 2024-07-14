import { styled } from "styled-components";

export const StyledList = styled.ul`
display:flex;
gap:1px;

.itemSizes {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 36px; */
  height: 40px;
  border: 1px solid transparent;
  background-color: transparent;
}

.itemSizes.active {
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 36px; */
  height: 40px;
  background-color: transparent;
}

.sizeSpan{
font-weight: 400;
font-size: 30px;
/* text-transform:capitalize; */
white-space:nowrap;
}

`;
