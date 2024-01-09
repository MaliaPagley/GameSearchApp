import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import NewGameCard from "./NewGameCard";

describe("NewGameCard Component: ", () => {
  const mockGame = {
    background_image: "https://test.com/gameimage.jpg",
    genres: [{ name: "Action" }, { name: "Adventure" }],
    name: "Test Game",
    platforms: [
      { platform: { name: "PlayStation 5" } },
      { platform: { name: "Xbox One" } },
    ],
  };

  it("renders correctly with game data and valid image URL", () => {
    const { getByText, getByTestId } = render(<NewGameCard game={mockGame} />);

    const actionGenre = getByText("Action");
    const adventureGenre = getByText("Adventure");
    const name = getByText("Test Game");

    const playstationPlatform = getByTestId("playstation-icon");
    const xboxPlatform = getByTestId("xbox-icon");
    const image = getByTestId("imageID");

    expect(actionGenre).toBeDefined();
    expect(adventureGenre).toBeDefined();
    expect(name).toBeDefined();
    expect(playstationPlatform).toBeTruthy();
    expect(xboxPlatform).toBeTruthy();
    expect(image).toBeTruthy();
  });

  describe("when image is invalid", () => {
    it("renders correctly with default image", () => {
      const mockGameNoImage = { background_image: "invalid-image-url" };

      const { getByTestId } = render(<NewGameCard game={mockGameNoImage} />);

      const defaultImage = getByTestId("noImageID");
      expect(defaultImage).toBeTruthy();
    });
  });

  describe("when card is pressed", () => {
    it("handles card press correctly", () => {
      const mockHandleCardPress = jest.fn();
      const { getByTestId } = render(
        <NewGameCard game={mockGame} handleCardPress={mockHandleCardPress} />,
      );

      fireEvent.press(getByTestId("touchable-id"));
      fireEvent.press(getByTestId("pressable-id"));

      expect(mockHandleCardPress).toHaveBeenCalledWith(mockGame);
    });
  });
});
