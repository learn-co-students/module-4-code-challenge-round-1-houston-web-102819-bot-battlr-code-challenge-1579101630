import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botarmy: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(res => this.setState({ bots: res }));
  }

  toggleBots = clickedbot => {
    this.setState({
      bots: this.state.bots.filter(bot => !clickedbot ),
      botarmy: [...this.state.botarmy, clickedbot]}
    )
    


    console.log("clicked", clickedbot);
  };

  render() {
    return (
      <div>
        <YourBotArmy botarmy={this.state.botarmy} />
        <BotCollection
          bots={this.state.bots}
          toggleBots={this.toggleBots}
          botarmy={this.state.botarmy}
        />
      </div>
    );
  }
}

export default BotsPage;
