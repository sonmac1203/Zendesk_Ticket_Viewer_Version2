import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Container,
  Badge,
} from "reactstrap";
import Moment from "moment";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    // anonnymous function
    fetch("https://zccsontmac.zendesk.com/api/v2/tickets.json", {
      headers: {
        Authorization:
          "Bearer d67acff1d1185cdfef514e908686b02cba3e988d1fce0df4a2ade742c3002443",
      },
    })
      .then((res) => res.json()) // convert the response to json format
      .then((data) => {
        console.log(data);
        setTickets(data.tickets);
      });
  }, []);

  const shortenString = (s, len) =>
    s.length > len ? s.substring(0, len) + "..." : s;

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Container className="my-5">
      <Row>
        {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket) => (
            <Col md="6" lg="4" className="mb-4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5" className="mb-0">
                    {ticket.id}. {capitalize(shortenString(ticket.subject, 35))}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted mt-1" tag="h6">
                    Created at {Moment(ticket.created_at).format("LLL")}
                  </CardSubtitle>
                  <div className="my-2">
                    <Badge color="danger">
                      {ticket.type ? capitalize(ticket.type) : "Task"}
                    </Badge>
                    <Badge className="mx-2" color="primary">
                      {ticket.priority ? capitalize(ticket.priority) : "Normal"}
                    </Badge>
                    <Badge color="warning">
                      {ticket.status ? capitalize(ticket.status) : "New"}
                    </Badge>
                  </div>
                  <CardText className="mt-3 mb-3">
                    {shortenString(ticket.description, 145)}
                  </CardText>
                  <div className="d-flex justify-content-end">
                    <Button color="info">View details</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Tickets;
