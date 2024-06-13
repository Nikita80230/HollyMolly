import { styled } from "styled-components";

export const WrapperBasketPage = styled.section`
  /* margin-top: 48px; */
  /* height: 100vh; */

  .titleBasket {
    margin-bottom: 40px;
  }

  .wrapperBasket {
    display: flex;
    gap: 136px;
  }

  .wrapperList {
    width: 755px;
  }

  .containerPrices {
    margin-bottom: 64px;
    border-radius: 16px;
    padding: 32px 24px;
    width: 421px;
    height: 370px;
    background: #f3f4fc;
  }

  .wrapperPrices {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    
  }

  .containerSpan{
    display:flex;
justify-content:space-between;
 width: 100%;
  }

  .wrapperPromoCode {
    margin-bottom: 64px;
    display: flex;
    gap: 24px;
    border-top: 1px solid #c6c6c6;
    padding: 20px 0px 0px 0px;
    width: 360px;
    height: 64px;
  }
`;
