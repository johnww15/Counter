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

  test("decreses count by 1 when Decrease button is clicked", () => {
    const decreaseButton = screen.getByText("Decrease");
    fireEvent.click(decreaseButton);
    const countValue = screen.getByTestId("count").textContent;
    expect(countValue).toBe("-1");
  });

  test("count is reset to 0 when Reset button is clicked", () => {
    const resetButton = screen.getByText("Reset");
    const decreaseButton = screen.getByText("Decrease");
    fireEvent.click(decreaseButton);
    fireEvent.click(resetButton);
    const countValue = screen.getByTestId("count").textContent;
    expect(countValue).toBe("0");
  });

  test("count is multiplied by -1 when -/+ button is clicked", () => {
    const swapButton = screen.getByText("-/+");
    const decreaseButton = screen.getByText("Decrease");
    fireEvent.click(decreaseButton);
    fireEvent.click(swapButton);
    const countValue = screen.getByTestId("count").textContent;
    expect(countValue).toBe("1");
  });
});
