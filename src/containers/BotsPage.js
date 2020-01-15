import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    yourBots: [],
    specsBot: null
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  handleClick = clickedBot => {
    this.state.specsBot ?
    this.setState({specsBot: null})
    : this.setState({specsBot: clickedBot})
  }

  handleEnlist = clickedBot => {
    if(this.state.bots.includes(clickedBot)){
      this.setState({
        bots: this.state.bots.filter(bot => bot !== clickedBot),
        yourBots: [...this.state.yourBots, clickedBot],
        specsBot: null
      })
    }
    if(this.state.yourBots.includes(clickedBot)){
      this.setState({
        bots: [...this.state.bots, clickedBot],
        yourBots: this.state.yourBots.filter(bot => bot !== clickedBot)
      })
    }
  }

  handleSort = e => {
    if(e.target.id === 'health'){
      this.setState({bots: this.state.bots.sort((a, b) => (a.health > b.health) ? -1 : 1)})
    }
    if(e.target.id === 'damage'){
      this.setState({bots: this.state.bots.sort((a, b) => (a.damage > b.damage) ? -1 : 1)})
    }
    if(e.target.id === 'armor'){
      this.setState({bots: this.state.bots.sort((a, b) => (a.armor > b.armor) ? -1 : 1)})
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} onClick={this.handleEnlist}/>
        {this.state.specsBot ? <BotSpecs bot={this.state.specsBot} onClick={this.handleClick} onEnlist={this.handleEnlist}/> : <BotCollection bots={this.state.bots} onClick={this.handleClick} onSort={this.handleSort}/>}
      </div>
    );
  }

}

export default BotsPage;
