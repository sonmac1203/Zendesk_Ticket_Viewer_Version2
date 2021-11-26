import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../Banner";

describe("<Banner />", () => {
  describe("Banner displaying when total ticket is undefined", () => {
    const { unmount } = render(<Banner />);
    const wrapper = screen.getByTestId("welcome-banner");

    test("Should show welcome statement", () => {
      expect(wrapper).toHaveTextContent("Welcome to Zendesk Ticket Viewer");
    });

    test("Should contain class 'welcome'", () => {
      expect(wrapper.classList.contains("welcome")).toBe(true);
    });

    test("Should have an element containing class 'error-para'", () => {
      expect(wrapper.childNodes[1].classList.contains("error-para")).toBe(true);
    });

    test("Should show the correct error message", () => {
      expect(wrapper.childNodes[1]).toHaveTextContent(
        "Congratulations! You have caught an error!"
      );
    });

    unmount();
  });

  describe("Banner displaying when total ticket is greater than 0", () => {
    const totalTickets = Math.floor(Math.random() * 100 + 1);
    const { unmount } = render(<Banner totalTickets={totalTickets} />);
    const wrapper = screen.getByTestId("welcome-banner");

    test("Should have an element containing class 'intro-para'", () => {
      expect(wrapper.childNodes[1].classList.contains("intro-para")).toBe(true);
    });

    test("Should show the correct info message", () => {
      expect(wrapper.childNodes[1]).toHaveTextContent(
        `There are ${totalTickets} tickets to display, and each page is showing 25 tickets.Click the 'Details' button to see more details about the displayed ticket.`
      );
    });

    unmount();
  });

  describe("Banner displaying when total ticket is 0", () => {
    const { unmount } = render(<Banner totalTickets={0} />);
    const wrapper = screen.getByTestId("welcome-banner");

    test("Should have an element containing class 'error-para'", () => {
      expect(wrapper.childNodes[1].classList.contains("error-para")).toBe(true);
    });

    test("Should show the correct info message", () => {
      expect(wrapper.childNodes[1]).toHaveTextContent(
        "There is no ticket to display."
      );
    });

    unmount();
  });
});
