import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    armyBots: []
  }

  movingBots = (bot) => {
    this.setState({
      armyBots: [
        ...this.state.armyBots,
        bot
      ]
    })

  }


  render() {
    return (
      <div>
        <YourBotArmy armyBots = {this.state.armyBots}/>
        <BotCollection bots={this.props.bots} movingBots = {this.movingBots} />
        
      </div>
    );
  }

}

export default BotsPage;
