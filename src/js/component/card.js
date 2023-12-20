import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ data, category }) => {
  const { store, actions } = useContext(Context);


  return data?.map((item, index) => {
		let imageBaseUrl;

	switch (category) {
		case "people":
		imageBaseUrl =
			"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/";
		break;
		case "planets":
		imageBaseUrl =
			"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/";
		break;
		default:
		imageBaseUrl =
			"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/";
		break;
		}

		const imgLink = `${imageBaseUrl}${parseInt(index) + 1}.jpg`;
		const fallbackImgLink = "https://www.horizonplant.com/wp-content/uploads/2017/05/placeholder-400x400.png"; // Replace with your actual fallback image URL
	
		const handleImageError = (event) => {
		event.target.src = fallbackImgLink;
		};
	return(
		
	)

    <div key={index} className="card">
      {category === "people" && (
        <>
		  <img
            src={imgLink}
			className="card-img-top"
            onError={handleImageError}
          />
          <div className="card-body container-md">
            <h5 className="card-title">
              Name: {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </h5>
            <div className="card_text container-md">
              <p className="p-0 m-0">
                Gender:{" "}
                {item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
              </p>
              <p className="p-0 m-0">
                Hair color:{" "}
                {item.hair_color.charAt(0).toUpperCase() +
                  item.hair_color.slice(1)}
              </p>
              <p className="p-0 m-0">
                Eye color:{" "}
                {item.eye_color.charAt(0).toUpperCase() +
                  item.eye_color.slice(1)}
              </p>
            </div>
            <Link to={`/single/${category}/${index}`}>
              <button className="btn btn-outline-primary pe-4">
                Learn more!
              </button>
            </Link>
            <button className="btn btn-light ms-5">
              {" "}
              <i className="fa-regular fa-heart" style={{ color: "#ff0f0f" }} />
            </button>
          </div>
        </>
      )}
      {category === "planets" && (
        <>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${
              index + 1
            }.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body container-md">
            <h5 className="card-title">
              Name: {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </h5>
            <div className="card_text container-md">
              <p className="p-0 m-0">
                Terrain:{" "}
                {item.terrain.charAt(0).toUpperCase() + item.terrain.slice(1)}
              </p>
              <p className="p-0 m-0">
                Population:{" "}
                {item.population.charAt(0).toUpperCase() +
                  item.population.slice(1)}
              </p>
            </div>
            <Link to={`/single/${index + 1}`}>
              <button className="btn btn-outline-primary pe-4">
                Learn more!
              </button>
            </Link>
            <button className="btn btn-light ms-5">
              {" "}
              <i className="fa-regular fa-heart" style={{ color: "#ff0f0f" }} />
            </button>
          </div>
        </>
      )}
      {category === "vehicles" && (
        <>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${
              index + 1
            }.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body container-md">
            <h5 className="card-title">
              Name:
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </h5>
            <div className="card_text container-md">
              <p className="p-0 m-0">
                Vehicle class:{" "}
                {item.vehicle_class.charAt(0).toUpperCase() +
                  item.vehicle_class.slice(1)}
              </p>
              <p className="p-0 m-0">
                Passengers:
                {item.passengers.charAt(0).toUpperCase() +
                  item.passengers.slice(1)}
              </p>
            </div>
            <Link to={`/single/${index + 1}`}>
              <button className="btn btn-outline-primary pe-4">
                Learn more!
              </button>
            </Link>
            <button className="btn btn-light ms-5">
              {" "}
              <i className="fa-regular fa-heart" style={{ color: "#ff0f0f" }} />
            </button>
          </div>
        </>
      )}
    </div>
  ));
};

export default Card;
