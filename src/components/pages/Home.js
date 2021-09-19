import React from 'react';
import '../../App.css';
import HeroSection from '../herosection/HeroSection';
import Footer from '../footer/Footer';
import Cards from '../cards/Cards';
function Home () {
	return (
		<>
		<HeroSection />
		<Cards />
		<Footer />
		</>
	);
}
export default Home