import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let character = store[params.category].find(
    (item, index) => index == params.theid
  );
  let backupUrl = "../../img/";
  return (
    <div className="jumbotron">
      <h1 className="display-4">
        This will show the demo element: {character?.name}
      </h1>
      {/* <p>{store.people[params.theid].name}</p> */}
      <hr className="my-4 border border-dark" />
      <div>
        <div className="container text-center border border-dark ">
          <div className="row border border-dark">
            <div className="col-md-4 border border-dark">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  parseInt(params.theid) + 1
                }.jpg`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="col-md-8 border border-dark">
              <h1>Name:</h1>

              {/* {character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h1> */}
              {/* {store.people[params.theid].properties.name} */}
              <p>Description: </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque augue diam, venenatis eget neque a, placerat
                blandit enim. Ut quis odio quam. Suspendisse rhoncus est risus,
                ut feugiat mauris ullamcorper vulputate. Nullam elementum tempus
                ipsum ut dignissim. Aliquam orci nisi, ullamcorper id mollis at,
                tempor ut risus. Nullam accumsan, quam non scelerisque viverra,
                eros arcu scelerisque nisi, quis consectetur lorem libero sed
                sem. Proin lacus sapien, consectetur ac ullamcorper ac, commodo
                quis leo.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row row-cols-auto text-center border border-dark">
            <p>hola</p>
            <p className="col p-4 m-4 border border-dark">Name:{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</p>
					<p className="col p-4 m-4 border border-dark">Birth year:{character.birth_year}</p>
					<p className="col p-4 m-4 border border-dark">Gender: {character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}</p>
					<p className="col p-4 m-4 border border-dark">Height: {character.height}</p>
					<p className="col p-4 m-4 border border-dark">Eye color:{character.eye_color.charAt(0).toUpperCase()+character.eye_color.slice(1)} </p>
					<p className="col p-4 m-4 border border-dark">Mass: {character.mass}</p>			
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
  favorites: PropTypes.object,
};
