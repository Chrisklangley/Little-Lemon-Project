import React from "react";
import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";

// Mock the fetchAPI function (assuming it's an asynchronous function)
jest.mock("./api", () => ({
  fetchAPI: jest.fn(() => Promise.resolve(["17:00", "18:00", "19:00"])),
}));

describe("BookingPage Component", () => {
  test("initializeTimes should return an array of available times", async () => {
    const availableTimes = await initializeTimes();
    expect(availableTimes).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes should return the same value provided in the state", () => {
    const state = ["14:00", "15:00"];
    const selectedDate = "2023-09-05";

    const updatedTimes = updateTimes(state, selectedDate);
    expect(updatedTimes).toEqual(state);
  });

  test("BookingPage renders with availableTimes", () => {
    const availableTimes = ["13:00", "14:00", "15:00"];

    render(<BookingPage availableTimes={availableTimes} />);

    const times = screen.getAllByTestId("time-option");
    expect(times).toHaveLength(3);
  });
});
