import React from "react";
import { Button, Spinner } from "reactstrap";

const Error = ({ reset }) => {
  return (
    <div className="error500" data-testid="error-page">
      <div className="mb-5">
        <span className="number5">5</span>
        <Spinner className="firstCircle me-3 ms-1" />
        <Spinner className="secondCircle" />
      </div>
      <div className="mt-4">
        <p>Something went wrong :(</p>
        <Button block onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
};

export default Error;
