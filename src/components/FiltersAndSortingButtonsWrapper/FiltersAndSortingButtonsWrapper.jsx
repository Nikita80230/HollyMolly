import { useState } from "react";

import SortingPanel from "../SortingPanel/SortingPanel";

import FilterButtonIcon from "src/assets/images/filtersButtonIcon.svg?react";

import { StyledFiltersAndSortingButtonsWrapper } from "./Styled";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import MobileFiltersPanel from "../MobileFilterPanel/MobileFilterPanel";

const FiltersAndSortingButtonsWrapper = ({
  handleSorting,
  sortType,
  sortingPanelRef,
  onPaginationReset,
}) => {
  const [isFiltersPanelOpened, setIFiltersPanelOpened] = useState(false);

  const toggleFiltersPanel = () => {
    setIFiltersPanelOpened(!isFiltersPanelOpened);
  };

  return (
    <StyledFiltersAndSortingButtonsWrapper>
      <button className="filterButton" onClick={toggleFiltersPanel}>
        <span className="filterButtonText">Фільтри</span>
        <FilterButtonIcon className="filterButtonIcon" />
      </button>
      {isFiltersPanelOpened && (
        <MobileFiltersPanel
          toggleFiltersPanel={toggleFiltersPanel}
          onPaginationReset={onPaginationReset}
          isFiltersPanelOpened={isFiltersPanelOpened}
        />
      )}
      <SortingPanel
        className="sorting"
        handleSorting={handleSorting}
        sortType={sortType}
        ref={sortingPanelRef}
      />
    </StyledFiltersAndSortingButtonsWrapper>
  );
};

export default FiltersAndSortingButtonsWrapper;
