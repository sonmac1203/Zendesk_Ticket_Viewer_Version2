import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Moment from "moment";

const Ticket = ({
  ticket: {
    id,
    subject,
    created_at,
    type,
    priority,
    status,
    description,
    requester_id,
    submitter_id,
    assignee_id,
  },
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const shortenString = (s, len) =>
    s.length > len ? s.substring(0, len) + "..." : s;

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Fragment>
      <Col md="6" lg="4" className="mb-4">
        <Card>
          <CardBody>
            <CardTitle tag="h5" className="mb-0">
              {id}. {capitalize(shortenString(subject, 35))}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted mt-1" tag="h6">
              Created at {Moment(created_at).format("LLL")}
            </CardSubtitle>
            <div className="my-2">
              <Badge color="danger">{type ? capitalize(type) : "Task"}</Badge>
              <Badge className="mx-2" color="primary">
                {priority ? capitalize(priority) : "Normal"}
              </Badge>
              <Badge color="warning">
                {status ? capitalize(status) : "New"}
              </Badge>
            </div>
            <CardText className="mt-3 mb-3">
              {shortenString(description, 145)}
            </CardText>
            <div className="d-flex justify-content-end">
              <Button color="info" onClick={() => setOpen(true)}>
                View details
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Modal centered size="lg" toggle={toggle} isOpen={open}>
        <ModalHeader
          close={
            <button className="btn-close" onClick={() => setOpen(false)} />
          }
          toggle={toggle}
        >
          {id}. {capitalize(subject)}
        </ModalHeader>
        <ModalBody>
          <p>
            <strong>Date: </strong>
            {Moment(created_at).format("LLL")}
          </p>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Requester Id: </strong>
            {requester_id}
          </p>
          <p>
            <strong>Submitter Id: </strong>
            {submitter_id}
          </p>
          <p>
            <strong>Assignee Id: </strong>
            {assignee_id}
          </p>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default Ticket;
