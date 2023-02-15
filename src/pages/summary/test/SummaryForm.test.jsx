import SummaryForm from "../SummaryForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("summary form checkbox and submit button", () => {
  it("should have a checkbox unchecked initially", () => {
    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    expect(consentCheckbox).not.toBeChecked();
  });
  it("should have a disable button initially", () => {
    render(<SummaryForm />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });
  it("should enable the submit button when the checkbox is clicked", () => {
    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");
    fireEvent.click(consentCheckbox);
    expect(consentCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();
  });
});
