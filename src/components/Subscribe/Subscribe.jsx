import { SubscribeEmailWrapper, SubscribeWrapper } from "./Styled";

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <h2 className="title">Підпишись на наші оновлення</h2>
      <p className="description">
        Підпишіться на наші оновлення щоб не пропусти знижки на ваші улюбленні товари
      </p>
      <SubscribeEmailWrapper>
        <input
          className="subscribeInput"
          type="email"
          placeholder="Ваша пошта"
        />

        <button className="subscribeButton" type="submit">Відправити</button>

      </SubscribeEmailWrapper>
    </SubscribeWrapper>
  );
};

export default Subscribe;
