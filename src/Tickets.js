import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { Row, Container } from "reactstrap";
import Pagination from "./Pagination";
import Error from "./Error";
import Welcome from "./Banner";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalTickets, setTotalTickets] = useState();
  const [reload, setReload] = useState(false);
  const reset = () => {
    setReload(true);
    setError(false);
    setPage(1);
  };

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
        setReload(false);
      })
      .catch(() => setError(true));
  }, [page, reload]);

  return (
    <div>
      <Welcome totalTickets={totalTickets} />
      {error ? (
        <Error reset={reset} />
      ) : (
        <Container className="my-4">
          <Pagination page={page} numPage={numPage} setPage={setPage} />
          <Row>
            {tickets &&
              tickets.length > 0 &&
              tickets.map((ticket, k) => <Ticket ticket={ticket} key={k} />)}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Tickets;
