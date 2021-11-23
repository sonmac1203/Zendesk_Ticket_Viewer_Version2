import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { Row, Container } from "reactstrap";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(2);
  useEffect(() => {
    fetch(
      `https://zccsontmac.zendesk.com/api/v2/tickets?page=${page}&per_page=20`,
      {
        headers: {
          Authorization:
            "Bearer d67acff1d1185cdfef514e908686b02cba3e988d1fce0df4a2ade742c3002443",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTickets(data.tickets);
      });
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket) => <Ticket ticket={ticket} />)}
      </Row>
    </Container>
  );
}

export default Tickets;
