import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOrders from "src/components/ListOrders/ListOrders";
import { getMyOrders } from "src/redux/orders/operations";
import { WrapperProfileOrdersPage } from "./Styled";
import SearchOrderInput from "src/components/SearchOrderInput/SearchOrderInput";
import { selectMyOrders } from "src/redux/orders/selectors";
import SortOrdersPanel from "src/components/SortOrdersPanel/SortOrdersPanel";

const ProfileOrdersPage = () => {
  const dispatch = useDispatch();
  const myOrders = useSelector(selectMyOrders);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedSortCriteria, setSelectedSortCriteria] = useState("all");

  const onSearchInputChange = (inputValue) => {
    setSearchInputValue(inputValue);
  };

  const handleSelectCriteria = (criteria) => {
    setSelectedSortCriteria(criteria);
  };

  console.log("criteria-->>", selectedSortCriteria);

  const filteredOrdersArray = myOrders.filter((order) =>
    order.id.toString().includes(searchInputValue)
  );

  const handleSorting = (selectedSortCriteria) => {
    if (selectedSortCriteria === "all") {
      return filteredOrdersArray;
    }

    if (selectedSortCriteria === "currentMonth") {
      const currentMonth = new Date().getMonth() + 1;
      return [
        ...filteredOrdersArray.filter((order) => {
          const orderMonth = new Date(order.orderDate).getMonth() + 1;
          return currentMonth === orderMonth;
        }),
      ];
    }

    if (selectedSortCriteria === "previousMonth") {
      const currentMonth = new Date().getMonth() + 1;

      const previousMonth = currentMonth - 1;

      return [
        ...filteredOrdersArray.filter((order) => {
          const orderMonth = new Date(order.orderDate).getMonth() + 1;
          return previousMonth === orderMonth;
        }),
      ];
    }

    if (selectedSortCriteria === "year") {
      const currentYear = new Date().getFullYear();
      return [
        ...filteredOrdersArray.filter((order) => {
          const orderYear = new Date(order.orderDate).getFullYear();
          return currentYear === orderYear;
        }),
      ];
    }
  };

  const sortedOrders = handleSorting(selectedSortCriteria, filteredOrdersArray);

  console.log(
    "handleSorting(selectedSortCriteria, filteredOrdersArray)->>",
    handleSorting(selectedSortCriteria)
  );

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  return (
    <WrapperProfileOrdersPage>
      <SearchOrderInput
        onSearchInputChange={onSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <SortOrdersPanel
        handleSelectCriteria={handleSelectCriteria}
        selectedSortCriteria={selectedSortCriteria}
      />
      <ListOrders orders={sortedOrders} />
    </WrapperProfileOrdersPage>
  );
};

export default ProfileOrdersPage;
