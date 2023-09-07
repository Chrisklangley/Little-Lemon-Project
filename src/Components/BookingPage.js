import React, { useState } from "react";
import BookingForm from "./BookingForm";
function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState(initializeTimes());

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function updateTimes(selectedDate) {
    return initializeTimes();
  }

  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default BookingPage;
