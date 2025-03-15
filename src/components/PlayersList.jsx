import Player from "./Player";
import players from "../players";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">FIFA Player Cards</h2>
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
