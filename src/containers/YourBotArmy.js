import React from "react";
import BotCard from "../components/BotCard";


  const YourBotArmy = props => {
    const {botCollection, myBots, view} = props
  
  
    const bots = myBots.map((bots,index) => {
      let gotMyBot = botCollection.find(bot => bot.id === bots)
      return (
        <div key={index} className="ui three wide column">
          <BotCard cardType="remove" view={view} bot={gotMyBot}/>
        </div>
      )
    });
  
    return (
      
        <div className='ui segment inverted olive bot-army'>
          <div className="ui five column grid">
            <div className="row bot-army-row">
              {bots}
            </div>
          </div>
        </div>
      
    )
  };
  
  export default YourBotArmy;

