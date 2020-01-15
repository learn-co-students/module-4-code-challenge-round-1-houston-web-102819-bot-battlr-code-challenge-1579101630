import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(res => this.setState({ res: res, MyArmy: res }));
  }

  state = {
    res: [],
    MyArmy: []
  };

  addArmy = () => this.setState({ MyArmy: [...this.state.MyArmy] });

  render() {
    return (
      <div>
        {<BotCollection bots={this.state.res} addArmy={this.addArmy} />}
      </div>
    );
  }
}

export default BotsPage;
