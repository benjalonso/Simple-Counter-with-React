//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

setInterval(function () {
	element.innerHTML += "Hello";
}, 1000);

//render your react application
ReactDOM.render(
	<Home
		number1={0}
		number2={0}
		number3={0}
		number4={0}
		number5={0}
		number6={0}
	/>,
	document.querySelector("#app")
);
