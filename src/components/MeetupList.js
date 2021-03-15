import React from "react";
import MeetupItem from "./MeetupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MeetupList(props) {
  const homes = props.data.map((home) => {
    return (
      <Col sm={4}>
        <MeetupItem data={home} />
      </Col>
    );
  });
  return (
      <Row>{homes}</Row>
  );
}
