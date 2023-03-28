import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Show from "./../Show";

const testShow = {
  name: "Foo Bar Show",
  summary: "Foo Bar Summary",
  seasons: [
    {
      id: 0,
      name: "season 1",
      episodes: [],
    },
    {
      id: 1,
      name: "season 2",
      episodes: [],
    },
  ],
};

test("renders without errors", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} />);
  const loading = screen.queryByText("Fetching data...");
  expect(loading).toBeInTheDocument;
  const testLoading = screen.queryByTestId("loading-container");
  expect(testLoading).toBeInTheDocument;
});

test("renders same number of options seasons are passed in", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
  const seasonOptions = screen.queryAllByTestId("season-option");
  expect(seasonOptions).toHaveLength(2);
});

test("handleSelect is called when an season is selected", async () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});
