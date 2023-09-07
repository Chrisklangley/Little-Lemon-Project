import React, { useState, useEffect, useReducer } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Styles/BookingForm.css"; // Import your CSS file

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const updatedTimes = action.updateTimes(action.selectedDate);
      return updatedTimes;
    default:
      return state;
  }
};

function BookingForm({ availableTimes, updateTimes }) {
  const [stateAvailableTimes, dispatch] = useReducer(reducer, availableTimes);

  const formik = useFormik({
    initialValues: {
      selectedTime: "",
      guestNumber: "",
      occasions: "",
      date: "",
    },
    validationSchema: Yup.object({
      guestNumber: Yup.number()
        .min(2, "Must be less than four people")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });

  return (
    <div className="booking-form-container">
      <form onSubmit={formik.handleSubmit} className="booking-form">
        <label htmlFor="res-date" className="label">
          Choose a date
        </label>
        <input
          name="date"
          type="date"
          id="res-date"
          className="input"
          value={formik.values.date}
          onChange={formik.handleChange}
        />

        <label htmlFor="res-time" className="label">
          Choose time
        </label>
        <select
          id="res-time"
          name="selectedTime"
          className="select"
          value={formik.values.selectedTime}
          onChange={formik.handleChange}
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guest" className="label">
          Number of guests
        </label>
        <input
          data-test-id="guestNub"
          type="number"
          placeholder="1"
          name="guestNumber"
          min="1"
          max="10"
          id="guest"
          className="input"
          value={formik.values.guestNumber}
          onChangeCapture={formik.handleChange}
        />
        <label htmlFor="occasions" className="label">
          Occasions
        </label>
        <select
          name="occasions"
          className="select"
          value={formik.values.occasions}
          onChange={formik.handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button type="submit" className="submit-button">
          Pick time
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
