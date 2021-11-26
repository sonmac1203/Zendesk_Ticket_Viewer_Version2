import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";

describe("Ticket components", () => {
  render(<Loading />);
  const wrapper = screen.getByTestId("loading-spinners");

  test("Should have 10 spinners - first method", () => {
    expect(wrapper.getElementsByClassName("spinner-grow").length).toBe(10);
  });

  test("Should have 10 spinners - second method", () => {
    expect(wrapper.querySelectorAll('[role="status"]')).toHaveLength(10);
  });

  test("Should contain class 'customloading'", () => {
    expect(wrapper.classList.contains("customloading")).toBe(true);
  });
});
