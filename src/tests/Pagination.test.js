import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("<Pagination />", () => {
  describe("Paging bar displayed when there is no ticket - numPage is 0", () => {
    const { unmount } = render(<Pagination page={1} numPage={0} />);
    const wrapper = screen.getByTestId("paging-bar");

    test("Should show 'First' on the bar", () => {
      expect(wrapper).toHaveTextContent("First");
    });

    test("Should show '< Prev' on the bar", () => {
      expect(wrapper).toHaveTextContent("< Prev");
    });

    test("Should show 'Next >' on the bar", () => {
      expect(wrapper).toHaveTextContent("Next >");
    });

    test("Should show 'Last' on the bar", () => {
      expect(wrapper).toHaveTextContent("Last");
    });

    test("Should show '1 / 1' on the bar", () => {
      expect(wrapper).toHaveTextContent("1 / 1");
    });

    test("All buttons should be disabled", () => {
      for (let i = 0; i < 5; i++) {
        expect(wrapper.querySelectorAll("button.page-link")[i]).toBeDisabled();
      }
    });

    unmount();
  });
  describe("First page active when numPage > 0", () => {
    const setPageClick = jest.fn();
    const { unmount } = render(
      <Pagination page={1} numPage={5} setPage={setPageClick} />
    );
    const wrapper = screen.getByTestId("paging-bar");

    test("Should show '1 / 5' on the bar", () => {
      expect(wrapper).toHaveTextContent("1 / 5");
    });

    test("First 3 buttons should be disabled and last 2 should be enabled", () => {
      for (let i = 0; i < 5; i++) {
        if (i < 3) {
          expect(
            wrapper.querySelectorAll("button.page-link")[i]
          ).toBeDisabled();
        } else {
          expect(wrapper.querySelectorAll("button.page-link")[i]).toBeEnabled();
        }
      }
    });
    unmount();
  });
  describe("Non-first and non-last page active when numPage > 0", () => {
    const { unmount } = render(<Pagination page={3} numPage={5} />);
    const wrapper = screen.getByTestId("paging-bar");

    test("Should show '3 / 5' on the bar", () => {
      expect(wrapper).toHaveTextContent("3 / 5");
    });

    test("All buttons but the middle one should be enabled", () => {
      for (let i = 0; i < 5; i++) {
        if (i === 2) {
          expect(
            wrapper.querySelectorAll("button.page-link")[i]
          ).toBeDisabled();
        } else {
          expect(wrapper.querySelectorAll("button.page-link")[i]).toBeEnabled();
        }
      }
    });

    unmount();
  });
});
