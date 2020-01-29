import React, { useState } from "react";
import FormFeild from "./FormFeild";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./App.css";

function App() {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([
    { name: "devin", age: 20, id: 1 },
    { name: "sarah", age: 29, id: 2 },
    { name: "angelo", age: 16, id: 3 }
  ]);
  const [form, setForm] = useState({
    name: "",
    age: ""
  });


  console.log("data", data);

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const del = id => {
    console.log("pressed");
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <FormFeild setData={setData} />
      {data.map((item, index) => (
        <div className="card">
          <div>
            {edit && (
              <Input
                type="text"
                name="age"
                id="age"
                value={data[index].age}
                placeholder="type age here"
                onChange={handleChanges}
              />
            )}

            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
          {/* <button onClick={() => del(item.id)}>delete</button> */}
          <div>
            <Button
              className="button"
              color="primary"
              size="sm"
              onClick={() => del(item.id)}
            >
              Delete
            </Button>{" "}
            <Button
              className="button"
              color="secondary"
              size="sm"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
