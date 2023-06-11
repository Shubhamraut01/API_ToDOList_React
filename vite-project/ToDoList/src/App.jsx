import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const [list, setList] = useState({
    task: "",
    date: "",
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("http://localhost:8000/tasks").then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  };

  const deleteRow = (id) => {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getList();
      });
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    }).then((result) => {
      console.log("API Log ", result);
      result.json().then((resp) => {
        console.log("API Data", resp);
      });
    });
  };

  const handleChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <h1>API</h1>
        <table border="1px solid black ">
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {data.map((res, i) => {
            return (
              <tr>
                <td>{res.id}</td>
                <td>{res.task}</td>
                <td>{res.date}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteRow(res.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div>
        <h3>ADD Task</h3>
        <form onSubmit={handleSubmit}>
          <label>Task : </label>
          <input
            type="text"
            name="task"
            value={list.task}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Date : </label>
          <input
            type="text"
            name="date"
            value={list.date}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
