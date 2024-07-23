import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListOrders from "src/components/ListOrders/ListOrders";
import { getMyOrders } from "src/redux/orders/operations";
import { WrapperProfileOrdersPage } from "./Styled";


const ProfileOrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());

   },[dispatch])
  return (
    <WrapperProfileOrdersPage>
<ListOrders/>
    </WrapperProfileOrdersPage>
  );
};

export default ProfileOrdersPage;
