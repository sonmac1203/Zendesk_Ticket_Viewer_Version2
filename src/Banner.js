import React from "react";

const Banner = ({ totalTickets, loading }) => {
  return (
    <div className="mb-5 welcome" data-testid="welcome-banner">
      <h1 className="welcome-sentence">Welcome to Zendesk Ticket Viewer</h1>
      {!loading &&
        (totalTickets ? (
          <p className="intro-para">
            There are {totalTickets} tickets to display, and each page is
            showing 25 tickets.
            <br />
            Click the 'Details' button to see more details about the displayed
            ticket.
          </p>
        ) : totalTickets === 0 ? (
          <p className="error-para">There is no ticket to display.</p>
        ) : (
          <p className="error-para">
            Congratulations! You have caught an error!
          </p>
        ))}
    </div>
  );
};

export default Banner;
