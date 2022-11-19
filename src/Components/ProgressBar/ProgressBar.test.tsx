import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from "./ProgressBar";

describe("ProgressBar component tests", () => {
  test("check for initial render", () => {
    render(<ProgressBar selected value={20} />);
    expect(screen.getByText("20%")).toBeInTheDocument();
  });
  test("check selected is false", () => {
    const { container } = render(<ProgressBar value={20} />);
    const els = container.getElementsByClassName("progress-bar--selected");
    expect(els.length).toBe(0);
  });
  test("check selected is true", () => {
    const { container } = render(<ProgressBar selected={true} value={20} />);
    const els = container.getElementsByClassName("progress-bar--selected");
    expect(els.length).toBe(1);
  });
  test("check class for exceeded value", () => {
    const { container } = render(<ProgressBar value={120} />);
    const els = container.getElementsByClassName(
      "progress-bar__progress--exceeded"
    );
    expect(els.length).toBe(1);
  });
});
