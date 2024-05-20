const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
    }
    
    
    
  return (
      <div>
        
   
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
          </ul>
            
    </div>
  );
};

export default Pagination;
