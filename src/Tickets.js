import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { Row, Container } from "reactstrap";
import Pagination from "./Pagination";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalTickets, setTotalTickets] = useState([]);

  useEffect(() => {
    fetch(
      `https://zccsontmac.zendesk.com/api/v2/tickets?page=${page}&per_page=25`,
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
        setTotalTickets(data.count);
        setNumPage(Math.ceil(data.count / 25));
      })
      .catch(() => setError(true));
  }, [page]);

  return error ? (
    <h1>HAHA</h1>
  ) : (
    <div>
      <div className="mb-5" class="welcome">
        <h1 class="welcome-sentence">Welcome to Zendesk Ticket Viewer</h1>
        <p class="intro-para">
          There are {totalTickets} tickets to display, and each page is showing
          25 tickets.
          <br />
          Click the 'Details' button to see more details about the displayed
          ticket.
        </p>
      </div>
      <Container className="my-4">
        <Pagination page={page} numPage={numPage} setPage={setPage} />
        <Row>
          {tickets &&
            tickets.length > 0 &&
            tickets.map((ticket) => <Ticket ticket={ticket} />)}
        </Row>
      </Container>
    </div>
  );
}

export default Tickets;
