import React from "react";
import { Container, Item } from "./style";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Item>Home</Item>
      </Link>
      <Link to={"/about"}>
        <Item>About</Item>
      </Link>
      <Link to={"/logo"}>
        <Item>Logo</Item>
      </Link>
      <Link to={"/movies"}>
        <Item>movies</Item>
      </Link>
    </Container>
  );
};
