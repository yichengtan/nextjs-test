import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../src/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const pagelink = screen.getByRole("link", {
      name: /this page!/i,
    });

    expect(pagelink).toBeInTheDocument();
  });
});
