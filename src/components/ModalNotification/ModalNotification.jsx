import IconClose from "src/assets/images/close.svg?react";
import { WrapperModal } from "./Styled";

const ModalNotification = ({ message, closeModal }) => {
  return (
    <WrapperModal>
      <button className="buttonModal" type="button" onClick={closeModal}>
        <IconClose className="iconClose" />
      </button>
      {Array.isArray(message) ? (
        message.map((line, index) => (
          <p className="description" key={index}>
            {line}
          </p>
        ))
      ) : (
        <p className="description">{message}</p>
      )}
    </WrapperModal>
  );
};

export default ModalNotification;
