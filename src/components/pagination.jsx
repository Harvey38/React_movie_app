import React from "react";
// pagination will not have any local state
// so we don't need any class so we will pass everything using props
const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }
  // number of pages
  const pages = [];
  for (var i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  // const =[1,]
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => {
          return (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
