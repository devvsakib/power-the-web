import { Component } from "react";
import "./card-list.styles.css";
import EachCard from "../each-card/each-card.component";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <EachCard monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
