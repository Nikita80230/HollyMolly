import { useState } from "react";
import { Link } from "react-router-dom";

import DesktopLogo from "src/assets/images/logo.svg?react";
import CloseSearchMenuIcon from "src/assets/images/closeCrossIcon.svg?react";
import SearchIcon from "src/assets/images/search.svg?react";

import InputGroup from "../InputGroup/InputGroup";
import Container from "../Container/Container";

import { routes } from "src/routes";
import { StyledHeaderSearchMenu } from "./Styled";

const HeaderSearchMenu = ({ handleCloseSearchMenu }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <StyledHeaderSearchMenu>
      <Container>
        <div className="searchMenuTop">
          <Link className="searchMenuLogo" to={routes.HOME}>
            <DesktopLogo className="searchMenuLogoIcon" />
          </Link>
          <div className="inputGroup">
            <SearchIcon className="searchIcon" />

            <InputGroup
              className="searchMenuInput"
              searchValue={searchValue}
              handleChange={handleChange}
              placeholder="Що ви шукаєте?"
            />
          </div>
          <button
            className="closeSearchMenuBtn"
            type="button"
            onClick={handleCloseSearchMenu}
          >
            <CloseSearchMenuIcon className="closeSearchMenuIcon" />
          </button>
        </div>
      </Container>
    </StyledHeaderSearchMenu>
  );
};

export default HeaderSearchMenu;

{
  /* <input
  className="input"
  placeholder=" "
  type="text"
  name="searchForm"
  onChange={handleChange}
  value={searchValue}
  // required={required}
  // disabled={disabled}
/>; */
}
