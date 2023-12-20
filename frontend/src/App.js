import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import {
	Header,
	Footer,
	Testimonials,
	Team,
	ContactUs,
	Profile,
	Register,
	Home,
	About,
	Services,
	Appointment,
	Login,
} from "./containers";
function App() {
	return (
		<div className="gradient-bg">
			<Header />
			<Home />
			<About />
			<Services />
			<Appointment />
			<Testimonials />
			<Team />
			<ContactUs />
			<Profile />
			<Footer />
		</div>
	);
}

export default App;
