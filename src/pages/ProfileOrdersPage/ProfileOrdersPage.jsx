import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pictureOrder1x from "src/assets/images/profile/order1x.webp";
import pictureOrder2x from "src/assets/images/profile/order2x.webp";
import TitleProfile from "src/components/Title/Title";
import { selectCategories } from "src/redux/categories/selectors";
import { routes } from "src/routes";
import { ContainerProfileOrder, WrapperSubtitleLink } from "./Styled";

const ProfileOrdersPage = () => {
  return (
    <>
      <TitleProfile />
      <WrapperSubtitleLink>
        <h4 className="subtitle">Мої замовлення</h4>
      </WrapperSubtitleLink>

      <ContainerProfileOrder>
        <picture>
          <source srcSet={pictureOrder2x} media="(min-resolution: 192dpi)" />
          <img src={pictureOrder1x} alt="shopping boxes" />
        </picture>
        <div>
          <h2 className="subtitleProfile">Тут могли би бути ваші замовлення</h2>
          <p className="description">
            Зараз ви ще не зробили замовлення.</p>
          <p className="description">Ви можете переглянути наші товари
            в категоріях<br></br>
            <Link  className="link" to={"/catalog/1"}>
              головні убори,
            </Link>{" "}
            <Link className="link" to={"/catalog/3"} > біжутерія,</Link>{" "}
            <Link className="link" to={"/catalog/2"}> сумочки </Link> та{" "}
            <Link className="link" to={"/catalog/4"} > інші,</Link> й обов’язково знайдете щось, що
            вам сподобається.
          </p>
        </div>
      </ContainerProfileOrder>
    </>
  );
};

export default ProfileOrdersPage;
