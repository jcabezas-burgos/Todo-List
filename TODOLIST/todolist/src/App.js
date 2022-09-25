import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react";


function App() {

  const [Items, setItems] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="contaner container fluid bg-light pb-3 mt-3"
      style={{ width: "560px" }}>
      <div className="text-center">
        <h1>
          TodoList
        </h1>
      </div>


      <div className="card" style={{ width: "537px" }}>
        <div className="card-header row">
          <input
            className="col-8"
            type="text"
            placeholder="Escribe aquí"
            onChange={(event) => setItems(event.target.value)}
          ></input>
          <button
            className="btn btn-dark ml-3 col-4"
            style={{ width: "150px" }}
            value="add Item"
            onClick={() => {
              setList(list.concat(`${Items}`));
            }}
          >
            Agregar Tarea
          </button>
        </div>
        <ul className="list-group list-group-flush">
          {list.map((tarea) => (
            <li className="list-group-item">
              {tarea}
              <button
                type="button"
                className="btn-close float-end"
                aria-label="Close"
                onClick={() =>
                  setList(list.filter((item) => item !== `${tarea}`))
                }
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div >
  )
}



export default App;
