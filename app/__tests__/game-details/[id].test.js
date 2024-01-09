import { render } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import useFetch from "../../../hook/useFetch";
import GameDetails from "../../game-details/[id]";

jest.mock("../../../hook/useFetch");
jest.mock("expo-router");

describe("GameDetails Component", () => {
  useLocalSearchParams.mockReturnValue({ id: "123" });
  const mockUseFetchResponse = {
    data: {
      name: "Test Game",
      background_image: "https://test.com/test-image.jpg",
      developers: [{ name: "Test Developer" }],
      released: "2024-01-01",
      tags: ["Multiplayer", "Singleplayer"],
      platforms: [
        { platform: { name: "PlayStation 5" } },
        { platform: { name: "Xbox One" } },
      ],
      genres: [{ name: "Action" }, { name: "Adventure" }],
      description_raw: "This is a test game description.",
    },
    isLoading: false,
    error: null,
  };

  it("renders data correctly", () => {
    useFetch.mockReturnValue(mockUseFetchResponse);
    const { getByTestId, getByText } = render(<GameDetails />);

    const name = getByText("Test Game");
    const developers = getByText("Test Developer");
    const date = getByText("Release Date: 2024-01-01");
    const platformOne = getByTestId("playstation-icon");
    const platformTwo = getByTestId("xbox-icon");
    const genreOne = getByText("Action");
    const genreTwo = getByText("Adventure");
    const description = getByText("This is a test game description.");

    expect(name).toBeDefined();
    expect(developers).toBeDefined();
    expect(date).toBeDefined();
    expect(platformOne).toBeTruthy();
    expect(platformTwo).toBeTruthy();
    expect(genreOne).toBeDefined();
    expect(genreTwo).toBeDefined();
    expect(description).toBeDefined();
  });

  describe("when loading", () => {
    it("renders loading indicator", () => {
      useFetch.mockReturnValue({ isLoading: true, error: null, data: null });

      const { getByTestId } = render(<GameDetails />);
      const activityIndicator = getByTestId("loadingID");
      expect(activityIndicator).toBeTruthy();
    });
  });

  describe("when on error", () => {
    it("renders error message", () => {
      useFetch.mockReturnValue({ isLoading: false, error: true, data: null });

      const { getByText } = render(<GameDetails />);
      expect(getByText("Something went wrong")).toBeDefined();
    });
  });
});
