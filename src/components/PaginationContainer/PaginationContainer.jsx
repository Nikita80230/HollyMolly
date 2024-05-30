import IconNext from "src/assets/images/nextPagination.svg?react";
import IconPrev from "src/assets/images/prevPagination.svg?react";
import { WrapperPagination } from "./Styled";

const PaginationContainer = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  currentProduct,
  handlePrevPage,
  handleNextPage,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {currentProduct.length === 0 || currentProduct.length < 12 ? (
        <></>
      ) : (
        <div className="buttonsPagination">
          {currentPage == 1 ? (
            <button type="button" className="buttonPrevNextDisabled" disabled>
              <IconPrev />
            </button>
          ) : (
            <button
              type="button"
              className="buttonPrevNext"
              onClick={handlePrevPage}
            >
              <IconPrev />
            </button>
          )}

          <WrapperPagination>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    type="button"
                    className={
                      number == currentPage
                        ? "paginationButtonActive"
                        : "paginationButton"
                    }
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </WrapperPagination>
          {currentProduct.length === productsPerPage &&
          currentPage * productsPerPage < totalProducts ? (
            <button
              type="button"
              className="buttonPrevNext"
              onClick={handleNextPage}
            >
              <IconNext />
            </button>
          ) : (
            <button type="button" className="buttonPrevNextDisabled" disabled>
              <IconNext />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default PaginationContainer;
