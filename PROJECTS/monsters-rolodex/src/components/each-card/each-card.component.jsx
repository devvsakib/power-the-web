import { Component } from "react";
import "./each-card.styles.css";
class EachCard extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default EachCard;
