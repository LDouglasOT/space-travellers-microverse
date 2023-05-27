import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("should render the logo and navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logo = screen.getByText("Space Travelers Hub");
    const rocketsLink = screen.getByText("Rockets");
    const missionsLink = screen.getByText("Missions");
    const profileLink = screen.getByText("My Profile");

    expect(logo).toBeInTheDocument();
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});
