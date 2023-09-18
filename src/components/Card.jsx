import {} from "react";
import { Link } from "react-router-dom";

function Card({ title, text, link, to }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={to} className="card-link">
          {/* <button className="btn btn-primary">{link}</button> */}
          {link}
        </Link>
      </div>
    </div>
  );
}

export default Card;
