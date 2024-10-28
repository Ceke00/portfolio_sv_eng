import Contact from "./components/pageComponents/Contact";
import About from "./components/pageComponents/About";
import Portfolio from "./components/pageComponents/Portfolio";
import Header from "./components/pageComponents/Header";
import Navigation from "./components/pageComponents/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			disable: "phone",
			duration: 700,
			easing: "ease-out-cubic",
		});
	}, []);
	return (
		<div className="App">
			<Navigation />

			<main className="container" id="main" tabIndex="-1">
				<Header />
				<About />
				<Portfolio />
				<Contact />
			</main>
		</div>
	);
}

export default App;
