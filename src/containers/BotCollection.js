import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from "./BotsPage";

class BotCollection extends React.Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard bot={bot} addArmy={this.props.addArmy} />
          ))}
          Collection of all bots
          {/* <BotsPage /> */}
        </div>
      </div>
    );
  }
}

export default BotCollection;
