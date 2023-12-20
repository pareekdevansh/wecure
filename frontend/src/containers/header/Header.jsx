import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./header.css";

function Header() {
	return (
		<div>
			<Navbar />
			<div className="header-section">
				<div className="header-section-image">
					<img
						src="https://medicaldialogues.in/h-upload/2022/07/15/180854-hospital-3.jpg"
						alt="hospital image"
						style={{
							width: "100%",
							height: "auto",
							maxHeight: "600px",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
