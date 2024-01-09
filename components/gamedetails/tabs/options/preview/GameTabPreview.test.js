import { render, waitFor } from "@testing-library/react-native";
import React from "react";

import GameTabPreview from "./GameTabPreview";
import useFetch from "../../../../../hook/useFetch";

jest.mock("../../../../../hook/useFetch");

describe("GameTabPreview Component: ", () => {
  const mockData = {
    items: [
      {
        id: {
          videoId: "testVideoId",
        },
      },
    ],
  };

  it("renders YoutubeIframe when data is available", async () => {
    useFetch.mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      error: false,
    });
    const { getByTestId } = render(<GameTabPreview name="TestGame" />);

    await waitFor(() => {
      expect(getByTestId("iframeID")).toBeTruthy();
    });
  });

  describe("when loading", () => {
    it("renders loading ActivityIndicator", () => {
      useFetch.mockReturnValueOnce({ isLoading: true });
      const { getByTestId } = render(<GameTabPreview name="TestGame" />);

      expect(getByTestId("loadingID")).toBeTruthy();
    });
  });

  describe("when on error or data is unavailable", () => {
    it("renders default message", () => {
      useFetch.mockReturnValueOnce({ error: true });
      const { getByText } = render(<GameTabPreview />);

      expect(getByText("Video is Unavailable")).toBeDefined();
    });
  });
});
