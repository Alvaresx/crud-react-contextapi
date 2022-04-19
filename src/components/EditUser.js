import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Nome</Label>
        <Input type="text" placeholder="Insira o nome"></Input>
      </FormGroup>
      <Button type="submit">Editar Nome</Button>
      <Link to="/" className="btn btn-danger ms-2">Cancelar</Link>
    </Form>
  );
};

export default EditUser;
