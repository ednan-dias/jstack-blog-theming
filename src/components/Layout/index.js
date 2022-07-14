import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../routes";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav, Container } from "./styles";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123">Post</Link>
      </Nav>

      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
