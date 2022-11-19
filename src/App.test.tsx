import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Button component tests", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent("Progress Bars");
});
