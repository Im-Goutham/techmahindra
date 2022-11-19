import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

test("Button component tests", () => {
  const mockClick = jest.fn();
  render(<Button text="Click me" value={20} onClick={mockClick} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveTextContent("Click me");
  userEvent.click(btnEl);
  expect(mockClick).toBeCalledWith(20);
});
