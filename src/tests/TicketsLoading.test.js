import React from "react";
import { render, screen } from "@testing-library/react";
import Tickets from "../Tickets";

describe("Ticket components", () => {
  render(<Tickets />);
  const wrapper = screen.getByTestId("tickets-display");

  test("Should show welcome statement", () => {
    expect(wrapper).toHaveTextContent("Welcome to Zendesk Ticket Viewer");
  });

  test("Should have 10 spinners - first method", () => {
    expect(wrapper.getElementsByClassName("spinner-grow").length).toBe(10);
  });

  test("Should have 10 spinners - second method", () => {
    expect(wrapper.querySelectorAll('[role="status"]')).toHaveLength(10);
  });

  test("Should contain an element with class 'welcome'", () => {
    expect(wrapper.firstChild.classList.contains("welcome")).toBe(true);
  });

  test("Should contain an element with class 'customloading'", () => {
    expect(wrapper.childNodes[1].classList.contains("customloading")).toBe(
      true
    );
  });
});
