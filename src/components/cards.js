import { Card,ListGroup } from "react-bootstrap";
import DataBase from "./player";
import React from "react";
function KitchenSinkExample() {
  return (
    <div className="player-info">
      {DataBase.map((card)=>(
              <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>Player Info</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name:{card.name}</ListGroup.Item>
              <ListGroup.Item>Age: {card.age} </ListGroup.Item>
              <ListGroup.Item> Nationality:{card.nationality} </ListGroup.Item>
              <ListGroup.Item> team:{card.team} </ListGroup.Item>
              <ListGroup.Item> jerseyNumber:{card.jerseyNumber} </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href={card.Biography}>Biography</Card.Link>
            </Card.Body>
          </Card>
      ))}
    </div>
  );
}

export default KitchenSinkExample;