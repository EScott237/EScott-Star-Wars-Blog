import React, { useContext } from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Card = ({data,cathegory}) => {
const {store, actions} = useContext(Context);
console.log(store.people,"data personajes")
  return (
	data?.map((item,index)=>(
		<div key={index} className="card">
			{cathegory === "people" &&(
				<>
				<img 
					src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body container-md">
					<h5 className="card-title">
						Name:
						{item.properties.name.charAt(0).toUpperCase() + item.properties.name.slice(1)}
					</h5>
				<div className='card_text container-md'>
					<p className='p-0 m-0'>Gender:{' '}
						{item.properties.gender.charAt(0).toUpperCase()+item.properties.gender.slice(1)}
					</p>
					<p className='p-0 m-0'>
						Hair color: 
						{item.properties.hair_color.charAt(0).toUpperCase()+item.properties.hair_color.slice(1)}
					</p>
					<p className='p-0 m-0'>
						Eye color: {' '}
						{item.properties.eye_color.charAt(0).toUpperCase()+item.properties.eye_color.slice(1)}
					</p>
				</div>
				<Link to={`/single/${item.uid}`}>
					<button className="btn btn-outline-primary pe-4">Learn more!</button>
				</Link>
				<button className='btn btn-light ms-5'> <i className="fa-regular fa-heart" style={{ color: '#ff0f0f' }} />
				</button>
				</div>
				</>
	
			)}
			{cathegory === "planets" &&(
				<>
				<img 
					src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body container-md">
					<h5 className="card-title">
						Name:
						{item.properties.name.charAt(0).toUpperCase() + item.properties.name.slice(1)}
					</h5>
				<div className='card_text container-md'>
					<p className='p-0 m-0'>Terrain:{' '}
						{item.properties.terrain.charAt(0).toUpperCase()+item.properties.terrain.slice(1)}
					</p>
					<p className='p-0 m-0'>
						Population: 
						{item.properties.population.charAt(0).toUpperCase()+item.properties.population.slice(1)}
					</p>	
				</div>
				<Link to={`/single/${item.uid}`}>
					<button className="btn btn-outline-primary pe-4">Learn more!</button>
				</Link>
				<button className='btn btn-light ms-5'> <i className="fa-regular fa-heart" style={{ color: '#ff0f0f' }} />
				</button>
				</div>
				</>
	
			)}
			{cathegory === "vehicles" &&(
				<>
				<img 
					src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body container-md">
					<h5 className="card-title">
						Name:
						{item.properties.name.charAt(0).toUpperCase() + item.properties.name.slice(1)}
					</h5>
				<div className='card_text container-md'>
					<p className='p-0 m-0'>Vehicle class:{' '}
						{item.properties.vehicle_class.charAt(0).toUpperCase()+item.properties.vehicle_class.slice(1)}
					</p>
					<p className='p-0 m-0'>
						Passengers: 
						{item.properties.passengers.charAt(0).toUpperCase()+item.properties.passengers.slice(1)}
					</p>	
				</div>
				<Link to={`/single/${item.uid}`}>
					<button className="btn btn-outline-primary pe-4">Learn more!</button>
				</Link>
				<button className='btn btn-light ms-5'> <i className="fa-regular fa-heart" style={{ color: '#ff0f0f' }} />
				</button>
				</div>
				</>
	
			)}
			

		</div>
	)))
};

export default Card;