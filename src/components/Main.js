import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";

const Main = () => {
  const generateAvailableTimes = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAvailableTimes = (date) => {
    const result = [];
    const random = generateAvailableTimes(date.getDate());
    
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }

    return result;
  };

  const submitBookingAPI = (formData) => {
    return true;
  };

  const initialState = { availableTimes: fetchAvailableTimes(new Date()) };
  const [state, dispatch] = useReducer(updateAvailableTimes, initialState);

  function updateAvailableTimes(state, date) {
    return { availableTimes: fetchAvailableTimes(new Date()) };
  }

  const navigate = useNavigate();

  function handleSubmitForm(formData) {
    if (submitBookingAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={handleSubmitForm}
            />
          }
        />
        <Route path="/" element={<Header />} />
      </Routes>
    </main>
  );
};

export default Main;
