import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const urlDays = `http://localhost:8001/api/days`;

  //   const promise1 = axios.get(urlDays);

  //   Promise.all([
  //     Promise.resolve(promise1)
  //   ]).then((all) => {
  //     dispatch({ 
  //       type: SET_APPLICATION_DATA,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data
  //     });
  //   });
  // }, [])

  return (
    <h1>Hello</h1>
  );
}