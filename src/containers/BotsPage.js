import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {

  state = ({
    originalBots: [],
    yourBots: []
  })
  
  componentDidMount () {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then( res => res.json())
    .then( res => this.setState({ originalBots: res}))
  }

  moveToYourArmy = (selectedBot) => {
    this.setState({
      originalBots: this.state.originalBots.filter(bot => bot !== selectedBot),
      yourBots: [...this.state.yourBots, selectedBot]
    })
  }

  moveToOriginal = (selectedBot) => {
    this.setState({
      originalBots: [...this.state.originalBots, selectedBot],
      yourBots: this.state.yourBots.filter(bot => bot !== selectedBot)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} moveToOriginal={this.moveToOriginal}/>
        <BotCollection originalBots={this.state.originalBots} moveToYourArmy={this.moveToYourArmy}/>
        
      </div>
    );
  }

}

export default BotsPage;
