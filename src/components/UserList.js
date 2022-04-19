import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ms-auto">
                <Link className="btn btn-warning me-1" to={`/edit/${user.id}`}>
                  Editar
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Deletar
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">Nenhum usuário registrado.</h4>
      )}
    </ListGroup>
  );
};

export default UserList;
