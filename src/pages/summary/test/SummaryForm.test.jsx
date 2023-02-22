import SummaryForm from "../SummaryForm";
import { queryByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("summary form checkbox and submit button", () => {
  it("should have a checkbox unchecked initially", () => {
    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    expect(consentCheckbox).not.toBeChecked();
  });
  it("should have a disable button initially", () => {
    render(<SummaryForm />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
  it("should enable the submit button when the checkbox is clicked", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(consentCheckbox);
    expect(consentCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();
  });
  it("should disable the submit button when the checkbox is clicked the second time", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const consentCheckbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(consentCheckbox);
    expect(consentCheckbox).toBeChecked();
    expect(submitButton).toBeEnabled();
    await user.click(consentCheckbox);
    expect(consentCheckbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });
});

describe("popover respond to mouse hover", () => {
  const user = userEvent.setup();

  it("does not show popover initially", () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(/This is a demo site/i);
    expect(nullPopover).not.toBeInTheDocument();
  });
  it("shows popover when mouse over on label", async () => {
    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(
      /i agree to terms & conditions/i
    );
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/This is a demo site/i);
    expect(popover).toBeInTheDocument();
    // does not show popover when mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
