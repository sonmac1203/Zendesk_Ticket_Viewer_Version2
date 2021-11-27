import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("<App />", () => {
  render(<App />);
  const wrapper = screen.getByTestId("app-test");

  test("Should exist", () => {
    expect(wrapper).toBeInTheDocument();
  });
});
