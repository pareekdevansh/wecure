import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
	Footer,
	Testimonials,
	Blogs,
	Team,
	ContactUs,
	Register,
	Home,
	About,
	Services,
	Appointment,
	Login,
	ForgotPassword,
	ResetPassword
} from "./containers";
import Navbar from "./components/navbar/Navbar";
function App() {
	return (
		<div className="app">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/home"
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
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route
						path="/reset-password"
						element={<ResetPassword />}
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
