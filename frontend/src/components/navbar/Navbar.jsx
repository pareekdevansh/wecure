import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Menu = () => {
	return (
		<>
			<p>
				<a href="/about">About</a>
			</p>
			<p>
				<a href="/contact">Contact</a>
			</p>
			<p>
				<a href="/services">Services</a>
			</p>
			<p>
				<a href="/team">Team</a>
			</p>
			<p>
				<a href="/testimonials">Testimonials</a>
			</p>
		</>
	);
};

function Navbar() {
	const [activeMenu, setActiveMenu] = useState(true);
	return (
		<div className="navbar navbar-gradient_bg">
			<div className="navbar-links">
				<div className="navbar-links-logo">WeCure</div>
				<div className="navbar-links-container">
					<Menu />
				</div>
			</div>
			<div className="navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="navbar-menu">
				{activeMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setActiveMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setActiveMenu(true)}
					/>
				)}
				{activeMenu && (
					<div className="navbar-menu-container scale-up-center">
						<div className="navbar-menu-container-links">
							<Menu />
							<div className="navbar-menu-container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
