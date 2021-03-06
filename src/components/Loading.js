import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div className="text-center customloading" data-testid="loading-spinners">
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
      <Spinner type="grow" className="mx-2" size="sm" />
    </div>
  );
};

export default Loading;
