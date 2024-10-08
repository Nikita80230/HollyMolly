import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOrders from "src/components/ListOrders/ListOrders";
import { getMyOrders } from "src/redux/orders/operations";

import SearchOrderInput from "src/components/SearchOrderInput/SearchOrderInput";
import { selectMyOrders } from "src/redux/orders/selectors";
import SortOrdersPanel from "src/components/SortOrdersPanel/SortOrdersPanel";
import { WrapperMobileMyOrders } from "./Styled";
import MobileSortOrdersPanel from "../MobileSortOrdersPanel/MobileSortOrdersPanel";

const MobileMyOrders = () => {
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

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  return (
    <WrapperMobileMyOrders>
      <SearchOrderInput
        onSearchInputChange={onSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <MobileSortOrdersPanel
        handleSelectCriteria={handleSelectCriteria}
        selectedSortCriteria={selectedSortCriteria}
      />
      <ListOrders orders={sortedOrders} />
    </WrapperMobileMyOrders>
  );
};
export default MobileMyOrders;
