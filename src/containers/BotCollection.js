import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {this.props.originalBots.map(botObject => <BotCard bot={botObject} onClick={this.props.moveToYourArmy}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
