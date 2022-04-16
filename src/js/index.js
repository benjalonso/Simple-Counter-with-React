//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Contador from "./component/contadorDeNumeros.jsx";
import PropTypes from "prop-types";
//render your react application
let first = 0;
let second = 0;
let third = 0;
let fourth = 0;
let fifth = 0;
let sixth = 0;
setInterval(() => {
	if (first === 9) {
		first = 0;
		second++;
	}
	if (second == 9) {
		second = 0;
		third++;
	}
	if (third == 9) {
		third = 0;
		fourth++;
	}
	if (fourth == 9) {
		fourth = 0;
		fifth++;
	}
	if (fifth == 9) {
		fifth = 0;
		sixth++;
	}
	if (sixth == 9) {
		sixth = 0;
	}
	first++;
	ReactDOM.render(
		<Contador
			unidad={first}
			decena={second}
			centena={third}
			unidadDeMil={fourth}
			decenaDeMil={fifth}
			centenaDeMil={sixth}
		/>,
		document.querySelector("#app")
	);
}, 100);
