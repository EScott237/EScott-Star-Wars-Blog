import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/Star-wars-logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
			<p>
				<img className="ms-5" height="70px" src={starWarsLogo}/>
			</p>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropstart">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites{" "}
								<span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length ? (
              store.favorites.map((item) => {
                return (
                  <li key={item._id}>
                    <a className="dropdown-item" href="#">
                      {item.properties.name}

                      <i
                        className="fas fa-trash-alt mx-3"
                        onClick={() => actions.delFavo(item._id)}
                      ></i>
                    </a>
                  </li>
                );
              })
            ) : (
              <li className="dropdown-item text-center">"Empty"</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};