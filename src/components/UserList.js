import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  return (
    <ListGroup>
      <ListGroupItem className="d-flex">
        <strong>Usuário Um</strong>
        <div className="ms-auto">
          <Link className="btn btn-warning me-1" to="/edit/1">Editar</Link>
          <Button color="danger">Deletar</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default UserList;
