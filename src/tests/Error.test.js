import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../components/Error";

describe("<Error />", () => {
  render(<Error />);
  const wrapper = screen.getByTestId("error-page");

  test("Should contain class 'error500'", () => {
    expect(wrapper.classList.contains("error500")).toBe(true);
  });

  test("Should contain the line 'Something went wrong :('", () => {
    expect(wrapper).toHaveTextContent("Something went wrong :(");
  });

  test("Should contain number 5 before two spinners", () => {
    expect(wrapper).toHaveTextContent("5");
  });

  test("Should contain two spinners", () => {
    expect(wrapper.getElementsByClassName("spinner-border").length).toBe(2);
  });

  test("Should have a 'Try again' button", () => {
    expect(wrapper.querySelector("button.btn")).toHaveTextContent("Try again");
  });
});
