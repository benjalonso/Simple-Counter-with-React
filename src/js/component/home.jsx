import React from "react";
import Numero from "./numero.jsx";

const Home = (prop) => {
	return (
		<div className=" container-fluid bg-secondary row w-50 m-auto my-5 p-4">
			<div className="col ">
				<p className="bg-dark fs-1 p-3 rounded">
					<i className="fa-solid fa-clock text-white fs-1 "></i>
				</p>
			</div>
			<Numero />
		</div>
	);
};

export default Home;
