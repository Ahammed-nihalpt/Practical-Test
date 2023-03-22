import React from "react";
import List from "../../Components/List/List";
import NavBar from "../../Components/NavBar/NavBar";
import "./ListPage.css";

function ListPage() {
  return (
    <div className="list_page">
      <NavBar />
      <List />
    </div>
  );
}

export default ListPage;
