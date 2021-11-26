import React from "react";
import Ticket from "./Ticket";
import { Row, Container } from "reactstrap";
import Pagination from "./Pagination";
import Error from "./Error";
import Welcome from "./Banner";
import Loading from "./Loading";

function Tickets() {
  const [tickets, setTickets] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [numPage, setNumPage] = React.useState(1);
  const [error, setError] = React.useState(false);
  const [totalTickets, setTotalTickets] = React.useState();
  const [reload, setReload] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const reset = () => {
    setReload(true);
    setError(false);
    setPage(1);
  };

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://${process.env.REACT_APP_SUBDOMAIN}.zendesk.com/api/v2/tickets?page=${page}&per_page=25`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OAUTH_TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets);
        setTotalTickets(data.count);
        setNumPage(Math.ceil(data.count / 25));
        setReload(false);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [page, reload]);

  return (
    <div data-testid="tickets-display">
      <Welcome totalTickets={totalTickets} loading={loading} />
      {loading ? (
        <Loading />
      ) : error ? (
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
