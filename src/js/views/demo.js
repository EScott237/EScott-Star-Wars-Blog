import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
// second view
const Demo = () => {
	return(
		<div>
			<div className="container text-center border border-dark ">
				<div className="row border border-dark">
					<div className="col-md-4 border border-dark">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
					className="card-img-top"
					alt="..."/>
					</div>
					<div className="col-md-8 border border-dark">
						<h1>Character name</h1>
						<p>descripcion del personaje aqui</p>
					</div>
				</div>
				</div>
				<div className="container text-center">
				<div className="row row-cols-auto text-center border border-dark">
					<p className="col p-4 m-4 border border-dark">Name:<p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Birth year:<p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>
					<p className="col p-4 m-4 border border-dark">Info: <p>Some info here</p></p>			
				</div>
				</div>
			
			
		</div>
	);
}

export default Demo;