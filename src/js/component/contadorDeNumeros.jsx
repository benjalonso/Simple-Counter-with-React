import React from "react";
import PropTypes from "prop-types";

export const Contador = (props) => {
	return (
		<>
			<div className=" container-fluid bg-secondary row w-50 m-auto my-5 p-4">
				<div className="col ">
					<p className="bg-dark fs-1 p-3 rounded">
						<i className="fa-solid fa-clock text-white fs-1 "></i>
					</p>
				</div>
				<div className="col">
					<p className="bg-dark fs-1 p-3 text-white text-center rounded">
						{props.centenaDeMil}
					</p>
				</div>
				<div className="col">
					<p className="bg-dark fs-1 p-3 text-white text-center rounded">
						{props.decenaDeMil}
					</p>
				</div>
				<div className="col">
					<p className="bg-dark fs-1 p-3 text-white text-center rounded">
						{props.unidadDeMil}
					</p>
				</div>
				<div className="col">
					<p className="bg-dark fs-1 p-3 text-white text-center rounded">
						{props.centena}
					</p>
				</div>
				<div className="col">
					<p className="bg-dark fs-1 p-3 text-white text-center rounded">
						{props.decena}
					</p>
				</div>
				<div className="col">
					<p className="bg-dark fs-1 p-3 text-white text-center rounded">
						{props.unidad}
					</p>
				</div>
			</div>
			<div className="container-fluid row mx-auto">
				<div
					className="btn-group col-6 mx-auto "
					role="group"
					aria-label="Basic example">
					<button type="button" className="btn btn-primary">
						Start
					</button>
					<button type="button" className="btn btn-success">
						Stop
					</button>
					<button type="button" className="btn btn-danger">
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

Contador.protoTypes = {
	unidad: PropTypes.number,
	decena: PropTypes.number,
	centena: PropTypes.number,
	unidadDeMil: PropTypes.number,
	decenaDeMil: PropTypes.number,
	centenaDeMil: PropTypes.number,
};

export default Contador;
