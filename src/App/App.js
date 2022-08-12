import React from 'react';
import Hero from '../componants/Hero/Hero'
import Explore from '../componants/explore/Explore'
import Reasons from '../componants/reasons/Reasons'
import './App.css';
function App() {
	return (
		<div className="App">
			<Hero/>
			<Explore/>
			<Reasons/>
		</div>
	);
}

export default App;
