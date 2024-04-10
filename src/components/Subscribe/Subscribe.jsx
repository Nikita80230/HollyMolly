import { SubscribeEmailWrapper, SubscribeWrapper } from "./Styled";

export const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <h2 className="title">Subscribe to our newsletters</h2>
      <p className="description">
        Subscribe to our updates and you will be able to receive all news about
        discounts or new products
      </p>
      <SubscribeEmailWrapper>
        <input
          className="subscribe-input"
          type="email"
          placeholder="Your e-mail"
        />
        <button className="subscribe-button">Send</button>
      </SubscribeEmailWrapper>
    </SubscribeWrapper>
  );
};
