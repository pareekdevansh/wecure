import React from "react";
import "./footer.css";
function Footer() {
	return (
		<div className="footer-section">
			{[...Array(3)].map((_, i) => (
				<div
					key={i}
					className="footer-content"
				>
					This is Footer. All rights reserved
				</div>
			))}
		</div>
	);
}

export default Footer;
