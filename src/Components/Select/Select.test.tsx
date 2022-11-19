import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "./Select";

test("Select component tests", () => {
  const mockChange = jest.fn();
  const { getByTestId, getAllByTestId } = render(
    <Select options={[1, 2, 3]} onChange={mockChange} />
  );

  fireEvent.change(getByTestId("select"), { target: { value: 2 } });
  expect(mockChange).toBeCalledWith(2);
  let options = getAllByTestId("select-option") as HTMLOptionElement[];
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeTruthy();
});
