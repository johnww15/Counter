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

  const getCountValue = () => screen.getByTestId("count").textContent;
  const clickButton = (buttonText) =>
    fireEvent.click(screen.getByText(buttonText));

  test("ensure initial count starts at 0", () => {
    expect(getCountValue()).toBe("0");
  });

  test("increases count by 1 when Increase button is clicked", () => {
    clickButton("Increase");
    expect(getCountValue()).toBe("1");
  });

  test("decreases count by 1 when Decrease button is clicked", () => {
    clickButton("Decrease");
    expect(getCountValue()).toBe("-1");
  });

  test("count is reset to 0 when Reset button is clicked", () => {
    clickButton("Decrease");
    clickButton("Reset");
    expect(getCountValue()).toBe("0");
  });

  test("count is multiplied by -1 when -/+ button is clicked", () => {
    clickButton("Decrease");
    clickButton("-/+");
    expect(getCountValue()).toBe("1");
  });
});
