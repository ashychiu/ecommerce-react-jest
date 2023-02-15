import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  it("should enable the submit button when the checkbox is clicked", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");
    await user.click(consentCheckbox);
    expect(consentCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();
  });
  it("should disable the submit button when the checkbox is clicked the second time", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");
    await user.click(consentCheckbox);
    expect(consentCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();
    await user.click(consentCheckbox);
    expect(consentCheckbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });
});
