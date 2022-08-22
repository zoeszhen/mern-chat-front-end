import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  const rooms = ["first room", "second room", "third room"];
  return (
    <>
      <h2>Avalible rooms</h2>
      <ListGroup>
        {rooms.map((room, i) => (
          <ListGroup.Item key={`${room}_${i}`}>room</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Memembers</h2>
    </>
  );
};

export default Sidebar;
