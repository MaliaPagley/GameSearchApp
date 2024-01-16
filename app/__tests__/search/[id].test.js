import { render, waitFor } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import useSearch from "../../../hook/useSearch";
import GameSearch from "../../search/[id]";

jest.mock("../../../hook/useSearch");
jest.mock("expo-router");
jest.mock("../../../firebase/index", () =>
  require("../../../firebase/firebaseMock"),
);

describe("GameSearch Component: ", () => {
  useLocalSearchParams.mockReturnValue({ id: "Param Search" });
  const mockUseSearchResponse = {
    searchLoader: false,
    searchError: null,
    searchResult: [
      { id: 1, name: "Game 1" },
      { id: 2, name: "Game 2" },
    ],
  };

  it("renders component correctly", async () => {
    useSearch.mockReturnValueOnce(mockUseSearchResponse);
    const { getByTestId, getByText } = render(<GameSearch />);

    await waitFor(() => {
      expect(getByTestId("listID")).toBeTruthy();
      expect(getByText("Game 1")).toBeDefined();
      expect(getByText("Game 2")).toBeDefined();
    });
  });

  describe("when loading", () => {
    it("renders loading indicator", () => {
      useSearch.mockReturnValueOnce({ searchLoader: true });
      const { getByTestId } = render(<GameSearch />);

      expect(getByTestId("loadingID")).toBeTruthy();
    });
  });

  describe("when on error", () => {
    it("renders error message", () => {
      useSearch.mockReturnValueOnce({ searchError: true });
      const { getByText } = render(<GameSearch />);

      expect(getByText("Something went wrong")).toBeDefined();
    });
  });
});
