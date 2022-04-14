import React from "react";
import PropTypes from "prop-types";

export const Numero = (props) => {
	return (
		<>
			<div className="col">
				<p className="bg-dark fs-1 p-3 text-white text-center rounded">
					{props.number6}
				</p>
			</div>
			<div className="col">
				<p className="bg-dark fs-1 p-3 text-white text-center rounded">
					{props.number5}
				</p>
			</div>
			<div className="col">
				<p className="bg-dark fs-1 p-3 text-white text-center rounded">
					{props.number4}
				</p>
			</div>
			<div className="col">
				<p className="bg-dark fs-1 p-3 text-white text-center rounded">
					{props.number3}
				</p>
			</div>
			<div className="col">
				<p className="bg-dark fs-1 p-3 text-white text-center rounded">
					{props.number2}
				</p>
			</div>
			<div className="col">
				<p className="bg-dark fs-1 p-3 text-white text-center rounded">
					{props.number1}
				</p>
			</div>
		</>
	);
};

Numero.protoTypes = {
	number1: PropTypes.number,
	number2: PropTypes.number,
	number3: PropTypes.number,
	number4: PropTypes.number,
	number5: PropTypes.number,
	number6: PropTypes.number,
};

export default Numero;
