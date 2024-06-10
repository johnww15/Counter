import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter initialCount={0} />);
  });

  afterEach(() => {
    cleanup();
  });

  test("ensure initial count starts at 0", () => {
    const countValue = screen.getByTestId("count").textContent;
    expect(countValue).toBe("0");
  });

  test("increases count by 1 when Increase button is clicked", () => {
    const increaseButton = screen.getByText("Increase");
    fireEvent.click(increaseButton);
    const countValue = screen.getByTestId("count").textContent;
    expect(countValue).toBe("1");
  });
});
