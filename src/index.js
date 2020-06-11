import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.css";
import logo from "./logo.png";

const App = () => {
  const url = "http://dummy.restapiexample.com/api/v1/employees";

  const [data, setData] = useState([]);

  useEffect(() => {
    var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
    };
    axios
      .get(url, config)
      .then(json => {
        setData(json.data.data)
      })
      .catch(e => {
        console.log("error", e);
      });
  }, []);

  const renderTable = () => {
    return data.map(employee => {
      return (
        <tr key={employee.id}>
          <td>{employee.employee_name}</td>
          <td>{employee.employee_salary}</td>
          <td className="al-right">{employee.employee_age}</td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <table id="users" className="bg-table">
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="salary">Salary</th>
            <th className="age">Age</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
