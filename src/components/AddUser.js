import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    navigate("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Insira o nome"
        ></Input>
      </FormGroup>
      <Button type="submit">Enviar</Button>
      <Link to="/" className="btn btn-danger ms-2">
        Cancelar
      </Link>
    </Form>
  );
};

export default AddUser;
