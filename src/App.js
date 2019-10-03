import React from "react";
import "./app.css";

import Header from "./components/Header";
import PostList from "./components/PostList";
export default function App() {
  return (
    <div className="container">
      <Header />
      <PostList />
    </div>
  );
}
