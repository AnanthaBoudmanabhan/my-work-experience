import moment from "moment";
import React, { useState, useEffect } from 'react';

function App() {

  const [duration, setDuration] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [experience] = useState([
    {
      id: 1,
      company: "Tech Mahindra",
      startDate: moment([2016, 8, 8]),
      endDate: moment([2019, 1, 6])
    },
    {
      id: 2,
      company: "M2P Solutions Private Limited",
      startDate: moment([2020, 1, 17]),
      endDate: moment([2021, 0, 22])
    },
    {
      id: 3,
      company: "Sunvera Software",
      startDate: moment([2021, 1, 10])
    }
  ]);

  function formatDuration(milliSeconds) {
    let totalSeconds = parseInt(milliSeconds / 1000);
    let years = Math.floor(totalSeconds / (365 * 24 * 3600));
    let days = Math.floor(totalSeconds % (365 * 24 * 3600) / (3600 * 24));
    let months = Math.floor(days / 30);
    days = days % 30;
    let hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    let minutes = Math.floor(totalSeconds % 3600 / 60);
    let seconds = Math.floor(totalSeconds % 60);
    return { years, months, days, hours, minutes, seconds };
  }

  function calculateExperience() {
    let experienceInMilliSeconds = experience.reduce((acc, item) => {
      let { startDate, endDate } = item;
      endDate = endDate || moment();
      const difference = endDate.diff(startDate);
      return acc + difference;
    }, 0);
    let extractedDuration = formatDuration(experienceInMilliSeconds);
    return extractedDuration;
  }

  useEffect(() => {
    setDuration(calculateExperience());
  }, []);


  let { years, months, days } = duration;


  return (
    <div className="app">
      <h1>My Experience in IT World</h1>
      <p>
        {years} years, {months} months and {days} days
      </p>
      <img src="/work.png" alt="work" />
    </div>
  );
}

export default App;
