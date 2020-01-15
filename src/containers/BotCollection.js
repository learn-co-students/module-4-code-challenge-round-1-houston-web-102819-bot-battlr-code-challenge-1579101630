import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
		<div>
			<div className="fluid ui buttons">
				<button id='health' className="ui button" onClick={this.props.onSort}>Health</button>
				<button id='damage' className="ui button" onClick={this.props.onSort}>Damage</button>
				<button id='armor' className="ui button" onClick={this.props.onSort}>Armor</button>
			</div>
			<div style={{height: 20}}></div>
			<div className="ui four column grid">
				<div className="row">
					{this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} onClick={this.props.onClick} />)}
				</div>
			</div>
		</div>
  	);
  }

};

export default BotCollection;
