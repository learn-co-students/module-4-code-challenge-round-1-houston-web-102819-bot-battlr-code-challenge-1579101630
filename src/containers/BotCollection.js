import React from "react";
import BotCard from "../components/BotCard";


  //const BotCollection = props => 
  const BotCollection = ({botCollection, view}) => {

	const bots = botCollection.map((bot) => {
		return <div className ="ui column"><BotCard bot={bot} view={view} /></div>
	});
	render () {
		return (
			<div className="ui four column grid">
				<div className='row'>
					{bots}
				</div>
			</div>
			)
	}
	
  };
  
  export default BotCollection;
  	
  




