import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import {
	Header,
	Footer,
	Testimonials,
	Blogs,
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
import Navbar from "./components/navbar/Navbar";
function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>

					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/book-an-appointment"
						element={<Appointment />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/services"
						element={<Services />}
					/>
					<Route
						path="/testimonials"
						element={<Testimonials />}
					/>
					<Route
						path="/team"
						element={<Team />}
					/>

					<Route
						path="/blogs"
						element={<Blogs />}
					/>

					<Route
						path="/contact-us"
						element={<ContactUs />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
