import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { useSearchMoviesQuery } from "../../hooks/useSearchKeyword";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import Card from "../../components/movieCard/Card";

import ReactPaginate from "react-paginate";

const List = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useSearchMoviesQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data.results.map((item) => {
              return (
                <Col key={item.id} lg={4} xs={12}>
                  <Card movie={item} />
                </Col>
              );
            })}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            forcePage={page - 1}
            pageCount={data.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default List;
