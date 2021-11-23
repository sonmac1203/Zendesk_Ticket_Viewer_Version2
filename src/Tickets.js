import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { Row, Container } from "reactstrap";
import Pagination from "./Pagination";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://zccsontmac.zendesk.com/api/v2/tickets?page=${page}&per_page=21`,
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
        setNumPage(Math.ceil(data.count / 21));
      });
  }, [page]);

  return (
    <Container className="my-5">
      <Pagination page={page} numPage={numPage} setPage={setPage} />
      <Row>
        {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket) => <Ticket ticket={ticket} />)}
      </Row>
    </Container>
  );
}

export default Tickets;
