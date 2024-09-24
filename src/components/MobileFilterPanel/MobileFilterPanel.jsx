import CloseCrossIcon from "src/assets/images/closeCrossIcon.svg?react";

import { StyledMobileFiltersPanel } from "./Styles";
import { createPortal } from "react-dom";

const MobileFiltersPanel = ({ toggleFiltersPanel }) => {
  return createPortal(
    <StyledMobileFiltersPanel>
      <button
        className="closeFiltersBtn"
        type="button"
        onClick={toggleFiltersPanel}
      >
        <CloseCrossIcon className="closeFiltersBtnIcon" />
      </button>
      <h3 className="filtersPanelTitle">Фільтри</h3>
    </StyledMobileFiltersPanel>,
    document.querySelector("#portal")
  );
};

export default MobileFiltersPanel;
