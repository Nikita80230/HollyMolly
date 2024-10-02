import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import DesktopLogo from "src/assets/images/logo.svg?react";
import CloseSearchMenuIcon from "src/assets/images/closeCrossIcon.svg?react";
import SearchIcon from "src/assets/images/search.svg?react";

import InputGroup from "../InputGroup/InputGroup";
import Container from "../Container/Container";

import { routes } from "src/routes";
import { StyledHeaderSearchMenu } from "./Styled";
import { useSelector } from "react-redux";
import { selectAllProducts } from "src/redux/products/productsSlice";

const productsFilter = (productName, productsArray) => {
  return productsArray?.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
};

const HeaderSearchMenu = ({ handleCloseSearchMenu }) => {
  const [searchValue, setSearchValue] = useState("");
  const allProducts = useSelector(selectAllProducts);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const filteredProducts = useMemo(
    () => productsFilter(searchValue, allProducts),
    [searchValue, allProducts]
  );

  return (
    <StyledHeaderSearchMenu>
      {/* <Container> */}
      <div className="searchMenuTop">
        <Link className="searchMenuLogo" to={routes.HOME}>
          <DesktopLogo className="searchMenuLogoIcon" />
        </Link>
        <div className="searchMenuForm">
          <div className="inputGroup">
            <SearchIcon className="searchIcon" />
            <InputGroup
              className="searchMenuInput"
              searchValue={searchValue}
              handleChange={handleChange}
              placeholder="Що ви шукаєте?"
              autoFocus={true}
            />
          </div>

          {searchValue.length > 0 && (
            <ul className="searchMenuList">
              {filteredProducts.map((product) => {
                return (
                  <li className="searchMenuItem" key={product.id}>
                    <Link className="searchMenuItemLink" to="/">
                      <SearchIcon className="searchIcon" />
                      <span className="searchMenuItemText">{product.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <button
          className="closeSearchMenuBtn"
          type="button"
          onClick={handleCloseSearchMenu}
        >
          <CloseSearchMenuIcon className="closeSearchMenuIcon" />
        </button>
      </div>
      {/* </Container> */}
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
