import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let character = store.people.find((item,index) => index == params.theid)
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {character?.name}</h1>
				{/* <p>{store.people[params.theid].name}</p> */}
			<hr className="my-4 border border-dark" />
			<div>
			<div className="container text-center border border-dark ">
				<div className="row border border-dark">
					<div className="col-md-4 border border-dark">
						<img 
						// src={`https://starwars-visualguide.com/assets/img/people/${item.uid}.jpg`}
						className="card-img-top"
						alt="..."/>
					</div>
					<div className="col-md-8 border border-dark">
						<h1>Name:</h1>
						
						{/* {item.properties.name.charAt(0).toUpperCase() + item.properties.name.slice(1)}</h1> */}
						{/* {store.people[params.theid].properties.name} */}
						<p>Description:</p>
						{/* {item.description.charAt(0).toUpperCase() + item.description.slice(1)}</p> */}
					</div>
				</div>
				</div>
				<div className="container text-center">
				<div className="row row-cols-auto text-center border border-dark">
					<p>hola</p>
					{/* <p className="col p-4 m-4 border border-dark">Name:{item.properties.name.charAt(0).toUpperCase() + item.properties.name.slice(1)}</p>
					<p className="col p-4 m-4 border border-dark">Birth year:{item.properties.birth_year}</p>
					<p className="col p-4 m-4 border border-dark">Gender: {item.properties.gender.charAt(0).toUpperCase() + item.properties.gender.slice(1)}</p>
					<p className="col p-4 m-4 border border-dark">Height: {item.properties.height}</p>
					<p className="col p-4 m-4 border border-dark">Eye color:{item.properties.eye_color.charAt(0).toUpperCase()+item.properties.eye_color.slice(1)} </p>
					<p className="col p-4 m-4 border border-dark">Mass: {item.properties.mass}</p>			 */}
				</div>
				</div>
		</div>


			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>


			
	);
};

Single.propTypes = {
	match: PropTypes.object,
	people: PropTypes.object,
	vehicles: PropTypes.object,
	planets: PropTypes.object,
	favorites: PropTypes.object
};
