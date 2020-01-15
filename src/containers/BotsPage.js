import React from "react";
import YourBotArmy from "./YourBotArmy"; 
import BotCollection from "./BotCollection"; 
import BotSpecs from "../components/BotSpecs";

export default class BotsPage extends React.Component {
  //start here with your code for step one
  state = { 
    botCollection: [], 
    myBots: [], 
    currentBot: null, 
    showList: true
  }; 

  componentDidMount(){ 
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots") 
    .then(res => res.json())
    .then(botCollection => this.setState({ botCollection: botCollection })); 
  };

  checkBots= (thisBot) => { 
    this.setState({ 
      currentBot: thisBot, 
      showList: false 
    })
    };
    showAll = () => { //botSpecs
     this.setState({ 
      currentBot: null, 
     showList: true 
    })
     };
    enlist= (thisBot) => { 
      let newArray = this.state.myBots.slice() 
         newArray.push(thisBot)
        this.setState({ 
      myBots: newArray, 
      currentBot: null, 
      listView: true 
    })
    };

  render() {
     let displayBots
      let chosenBot = this.state.currentBot ? this.state.botCollection.find(bot => bot.id === this.state.currentBot) : null; 

 if (this.state.listView) { 
       displayBots = <BotCollection botCollection={this.state.botCollection} view={this.checkBots}/>
   } else { 
       displayBots = <BotSpecs bot={chosenBot} showAllBots={this.chosenBot} seeAll={this.seeAll} enlist={this.enlist}/>    
      return (
      <div>
      <YourBotArmy {...this.state} view={this.checkBots} /> 
      <BotCollection botCollection={this.state.botCollection} view={this.checkBots}/>
    </div>
  );
}

}
}
