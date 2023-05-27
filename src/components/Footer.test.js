import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should render the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText("Footer");
    expect(footerText).toBeInTheDocument();
  });
});
