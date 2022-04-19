import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const navigate = useNavigate();
  const currentUserId = useParams();

  useEffect(() => {
    const userId = currentUserId.id;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    navigate("/");
  };

  const onChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          name="name"
          value={selectedUser.name}
          placeholder="Insira o nome"
          onChange={onChange}
        ></Input>
      </FormGroup>
      <Button type="submit">Editar Nome</Button>
      <Link to="/" className="btn btn-danger ms-2">
        Cancelar
      </Link>
    </Form>
  );
};

export default EditUser;
