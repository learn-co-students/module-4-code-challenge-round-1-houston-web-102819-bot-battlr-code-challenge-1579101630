import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';
import SearchBar from '../components/SearchBar'

class BotsPage extends React.Component {
  state = {
    bots: [],
    searchedBots: [],
    yourBots: [],
    showBotSpecs: null
  }

  handleBotCollection = (clickedBot) => {
    if (this.state.yourBots.indexOf(clickedBot) === -1 ){
      this.setState({yourBots: [...this.state.yourBots, clickedBot]})
    }else{
      this.setState({yourBots: this.state.yourBots.filter(bot => bot !== clickedBot)})
    }
  }

  toggleBotSpecs = (clickedBot) => {
    if (this.state.showBotSpecs){
      this.setState({showBotSpecs: null})
    }else{
      this.setState({showBotSpecs: clickedBot})
    }
  }

  handleSearch = (input) => {
    ////couldn't finish this in time :'(
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(res => this.setState({bots: res}))
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        <YourBotArmy
          bots={this.state.yourBots}
          handleBotCollection={this.handleBotCollection}
        />
        {
          !this.state.showBotSpecs ?
            <BotCollection
              bots={this.state.bots} 
              toggleBotSpecs={this.toggleBotSpecs}
              // searchedBots={this.props.searchedBots}
            />
          :
            <BotSpecs 
              bot={this.state.showBotSpecs} 
              handleBotCollection={this.handleBotCollection}
              toggleBotSpecs={this.toggleBotSpecs}
            />
        }
        
      </div>
    );
  }

}

export default BotsPage;
