import React from 'react';
import Hero from '../componants/Hero/Hero'
import Explore from '../componants/explore/Explore'
import Reasons from '../componants/reasons/Reasons'
import Plans from '../componants/plans/Plans'
import AboutUs from '../componants/aboutus/AboutUs'
import Join from '../componants/join/Join'
import Footer from '../componants/footer/Footer'
import './App.css';
function App() {
	return (
		<div className="App">
			<Hero/>
			<Explore/>
			<Reasons/>
			<Plans/>
			<AboutUs/>
			<Join/>
			<Footer/>
		</div>
	);
}

export default App;
