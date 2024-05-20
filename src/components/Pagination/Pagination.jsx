import { WrapperPagination } from "./Styled";

const Pagination = ({ productsPerPage, totalProducts, paginate,currentPage }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <WrapperPagination>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" className={number == currentPage ? "paginationButtonActive": "paginationButton"} onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </WrapperPagination>
  );
};

export default Pagination;
