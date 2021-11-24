import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paging = ({ page, numPage, setPage }) => {
  return (
    <Pagination className="mb-3 d-flex justify-content-center">
      <PaginationItem>
        <PaginationLink className="px-3" onClick={() => setPage(1)}>
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          className="px-3"
          onClick={() => page > 1 && setPage(page - 1)}
        >
          {"< Prev"}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="px-4">
          {page} / {Math.max(numPage, 1)}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          className="px-3"
          onClick={() => page < numPage && setPage(page + 1)}
        >
          {"Next >"}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          className="px-3"
          onClick={() => setPage(Math.max(numPage, 1))}
        >
          Last
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default Paging;
