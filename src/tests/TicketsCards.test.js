import React from "react";
import { render, screen, prettyDOM, waitFor } from "@testing-library/react";
import Tickets from "../Tickets";

const firstTicket = {
  url: "https://zccsontmac.zendesk.com/api/v2/tickets/203.json",
  id: 203,
  external_id: null,
  via: {
    channel: "api",
    source: {
      from: {},
      to: {},
      rel: null,
    },
  },
  created_at: "2021-11-24T08:46:05Z",
  updated_at: "2021-11-24T08:46:05Z",
  type: "problem",
  subject: "velit eiusmod reprehenderit officia cupidatat",
  raw_subject: "velit eiusmod reprehenderit officia cupidatat",
  description:
    "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
  priority: "urgent",
  status: "open",
  recipient: null,
  requester_id: 422080781851,
  submitter_id: 422080781851,
  assignee_id: 422080781851,
  organization_id: 361631015511,
  group_id: 360022298451,
  collaborator_ids: [],
  follower_ids: [],
  email_cc_ids: [],
  forum_topic_id: null,
  problem_id: null,
  has_incidents: false,
  is_public: true,
  due_at: null,
  tags: ["est", "incididunt", "nisi"],
  custom_fields: [],
  satisfaction_rating: null,
  sharing_agreement_ids: [],
  fields: [],
  followup_ids: [],
  ticket_form_id: 360003537211,
  brand_id: 360007072051,
  allow_channelback: false,
  allow_attachments: true,
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

describe("Ticket components", () => {
  React.useState = jest
    .fn()
    .mockReturnValueOnce([[firstTicket], {}])
    .mockReturnValueOnce([1, {}])
    .mockReturnValueOnce([1, {}])
    .mockReturnValueOnce([false, {}])
    .mockReturnValueOnce([1, {}])
    .mockReturnValueOnce([false, {}])
    .mockReturnValueOnce([false, {}]);
  React.useEffect = jest.fn();
  const { unmount } = render(<Tickets />);
  const wrapper = screen.getByTestId("tickets-display");

  test("Should have only one card", () => {
    expect(wrapper.getElementsByClassName("card").length).toBe(1);
  });
  //console.log(wrapper.getElementsByClassName("card-title")[0]);
  // test("Should have only one", () => {
  //   expect(wrapper.querySelectorAll(".card-title")).toBe(1);
  // });

  unmount();
});

describe("Ticket components", () => {
  React.useState = jest
    .fn()
    .mockReturnValueOnce([[firstTicket, firstTicket], {}])
    .mockReturnValueOnce([1, {}])
    .mockReturnValueOnce([1, {}])
    .mockReturnValueOnce([false, {}])
    .mockReturnValueOnce([1, {}])
    .mockReturnValueOnce([false, {}])
    .mockReturnValueOnce([false, {}]);
  React.useEffect = jest.fn();
  render(<Tickets />);
  const wrapper = screen.getByTestId("tickets-display");

  //console.log(prettyDOM(wrapper));

  // test("Should show welcome statement", () => {
  //   expect(wrapper).toHaveTextContent(capitalize(firstTicket.subject));
  // });

  test("Should have two cards", () => {
    expect(wrapper.getElementsByClassName("card").length).toBe(2);
  });
});
