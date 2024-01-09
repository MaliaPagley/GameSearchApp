import { render } from "@testing-library/react-native";
import React from "react";

import Populargames from "./Populargames";
import useInfiniteList from "../../../hook/useInfiniteList";

jest.mock("../../../hook/useInfiniteList");

describe("Populargames Component: ", () => {
  it("renders data correctly", () => {
    useInfiniteList.mockReturnValueOnce({
      games: [
        { id: 1, name: "Game 1" },
        { id: 2, name: "Game 2" },
      ],
      loadingList: false,
      listError: null,
      loadMoreGames: jest.fn(),
    });

    const { getByText, getByTestId } = render(<Populargames />);

    expect(getByText("Popular Games")).toBeDefined();
    expect(getByTestId("listID")).toBeDefined();
  });

  describe("when loading", () => {
    it("renders loading indicator while fetching data", () => {
      useInfiniteList.mockReturnValueOnce({ loadingList: true });

      const { getByTestId } = render(<Populargames />);
      expect(getByTestId("loadingID")).toBeTruthy();
    });
  });

  describe("when on error", () => {
    it("renders error message", () => {
      useInfiniteList.mockReturnValueOnce({ listError: true });

      const { getByText } = render(<Populargames />);
      expect(getByText("Data Unavailable")).toBeDefined();
    });
  });
});
