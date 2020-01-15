import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.armyBots.map(bot =><BotCard bot={bot} movingBots = {this.props.movingBots}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
