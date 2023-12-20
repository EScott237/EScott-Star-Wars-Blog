const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "NULL",
			background: "white",
			initial: "white",
		  },
		  {
			title: "PRIMERO",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SEGUNDO",
			background: "white",
			initial: "white",
		  },
		],
  
		people: [],
		vehicles: [],
		planets: [],
		favorites: [],
	  },
	  actions: {
		loadData: () => {
		  const store = getStore();
		  fetch("https://swapi.dev/api/people/")
			.then((res) => res.json())
			.then((data) => setStore({ people: data.results }))
			.catch((err) => console.error(err));
  
		  fetch("https://swapi.dev/api/vehicles/")
			.then((res) => res.json())
			.then((data) => setStore({ vehicles: data.results }))
			.catch((err) => console.error(err));
  
		  fetch("https://swapi.dev/api/planets/")
			.then((res) => res.json())
			.then((data) => setStore({ planets: data.results }))
			.catch((err) => console.error(err));
		},
	  },
	};
  };
  
  export default getState;
  