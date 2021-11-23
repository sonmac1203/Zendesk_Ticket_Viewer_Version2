import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import {
  Row,
  Container,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [numTickets, setNumTickets] = useState([]);

  const numPages = (num, per) => Math.floor((num - 1) / per) + 1;

  useEffect(() => {
    fetch(
      `https://zccsontmac.zendesk.com/api/v2/tickets?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization:
            "Bearer d67acff1d1185cdfef514e908686b02cba3e988d1fce0df4a2ade742c3002443",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets);
        setNumTickets(data.count);
      });
  }, [page]);

  return (
    <div>
      <Pagination className="mt-5 d-flex justify-content-center">
        <PaginationItem>
          <PaginationLink first href="#" onClick={() => setPage(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous onClick={() => setPage(page - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next onClick={() => setPage(page + 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            last
            onClick={() => setPage(numPages(numTickets, perPage))}
          />
        </PaginationItem>
      </Pagination>
      <Container className="my-4">
        <Row>
          {tickets &&
            tickets.length > 0 &&
            tickets.map((ticket) => <Ticket ticket={ticket} />)}
        </Row>
      </Container>
      <Pagination className="mb-5 d-flex justify-content-center">
        <PaginationItem>
          <PaginationLink first href="#" onClick={() => setPage(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous onClick={() => setPage(page - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next onClick={() => setPage(page + 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            last
            onClick={() => setPage(numPages(numTickets, perPage))}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default Tickets;
