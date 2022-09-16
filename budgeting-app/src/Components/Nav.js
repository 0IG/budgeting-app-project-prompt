import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img
          id="nav-image"
          src="https://images.squarespace-cdn.com/content/v1/598c70eca803bbff2df2de7c/1502384859856-K1W0C71Y6OO1QGT9WNIF/JiuJitsu.jpg?format=2500w"
          alt="p"
        />
      </Link>
      <Link to="/transactions" id="history">
        Transaction History
      </Link>
      <Link to="/transactions/new" id="new">
        New Transaction
      </Link>
    </div>
  );
}
