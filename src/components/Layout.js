import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container className="pt-5">{children}</Container>
    </>
  );
}
