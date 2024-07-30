import clsx from "clsx";

import { StyledSortOrdersPanel } from "./Styled";

const SortOrdersPanel = ({ handleSelectCriteria, selectedSortCriteria }) => {
  return (
    <StyledSortOrdersPanel>
      <button
        // className={`sortButton ${
        //   selectedSortCriteria === "all" ? "active" : ""
        // }`}
        className={clsx("sortButton", {
          active: selectedSortCriteria === "all",
        })}
        type="button"
        onClick={() => handleSelectCriteria("all")}
      >
        Всі
      </button>
      <button
        className={clsx("sortButton", {
          active: selectedSortCriteria === "currentMonth",
        })}
        type="button"
        onClick={() => handleSelectCriteria("currentMonth")}
      >
        Цього місяця
      </button>
      <button
        className={clsx("sortButton", {
          active: selectedSortCriteria === "previousMonth",
        })}
        type="button"
        onClick={() => handleSelectCriteria("previousMonth")}
      >
        Минулого місяця
      </button>
      <button
        className={clsx("sortButton", {
          active: selectedSortCriteria === "year",
        })}
        type="button"
        onClick={() => handleSelectCriteria("year")}
      >
        Цього року
      </button>
    </StyledSortOrdersPanel>
  );
};

export default SortOrdersPanel;
