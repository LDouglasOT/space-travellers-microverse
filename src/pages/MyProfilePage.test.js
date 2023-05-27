import React from "react";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import MyProfilePage from "./MyProfilePage";

// Mocking useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("MyProfilePage Component", () => {
  const mockRockets = [
    { rocket_name: "Falcon 9", reserved: true },
    { rocket_name: "Starship", reserved: false },
  ];

  const mockMissions = [
    { mission_name: "Mission A", active: true },
    { mission_name: "Mission B", active: false },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        rockets: { rockets: mockRockets },
        mission: { missions: mockMissions },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render joined missions correctly", () => {
    render(<MyProfilePage />);

    const joinedMissionA = screen.getByText("Mission A");
    const joinedMissionB = screen.queryByText("Mission B");

    expect(joinedMissionA).toBeInTheDocument();
    expect(joinedMissionB).not.toBeInTheDocument();
  });

  it("should render reserved rockets correctly", () => {
    render(<MyProfilePage />);

    const reservedRocketFalcon9 = screen.getByText("Falcon 9");
    const reservedRocketStarship = screen.queryByText("Starship");

    expect(reservedRocketFalcon9).toBeInTheDocument();
    expect(reservedRocketStarship).not.toBeInTheDocument();
  });

});
