import React from "react";
import Numero from "./numero.jsx";
import PropTypes from "prop-types";

const Home = (props) => {
	return (
		<div className=" container-fluid bg-secondary row w-50 m-auto my-5 p-4">
			<div className="col ">
				<p className="bg-dark fs-1 p-3 rounded">
					<i className="fa-solid fa-clock text-white fs-1 "></i>
				</p>
			</div>
			<Numero
				number1={props.number1}
				number2={props.number2}
				number3={props.number3}
				number4={props.number4}
				number5={props.number5}
				number6={props.number6}
			/>
		</div>
	);
};

Home.protoTypes = {
	number1: PropTypes.number,
	number2: PropTypes.number,
	number3: PropTypes.number,
	number4: PropTypes.number,
	number5: PropTypes.number,
	number6: PropTypes.number,
};

export default Home;
