import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function FormFeild(props) {
  const [form, setForm] = useState({
    name: "",
    age: ""
  });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const submit = e => {
    e.preventDefault();
    props.setData(data => [...data, { ...form, id: Date.now() }]);
    setForm({
      name: "",
      age: ""
    });
  };

  return (
    <Form className="form" onSubmit={submit} inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="age" className="mr-sm-2">
          Age:
        </Label>
        <Input
          type="text"
          name="age"
          id="age"
          value={form.age}
          placeholder="type age here"
          onChange={handleChanges}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="name" className="mr-sm-2">
          Name:
        </Label>
        <Input
          value={form.name}
          type="text"
          name="name"
          id="name"
          placeholder="type name here"
          onChange={handleChanges}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
