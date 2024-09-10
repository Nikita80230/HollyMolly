import { ContainerNotification } from "./Styled";
import IconClose from "src/assets/images/close.svg?react";

const NotificationCustom = ({ title }) => {
  return (
    <ContainerNotification>
      <IconClose className="icon" />
      <p className="notification">{title}</p>
    </ContainerNotification>
  );
};

export default NotificationCustom;
