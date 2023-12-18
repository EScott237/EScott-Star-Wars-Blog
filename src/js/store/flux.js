const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "NULL",
					background: "white",
					initial: "white"
				},
				{
					title: "PRIMERO",
					background: "white",
					initial: "white"
				},
				{
					title: "SEGUNDO",
					background: "white",
					initial: "white"
				}
				
			],

			people:[],
			vehicles:[],
			planets:[],
			favorites:[]
			
		},
		actions: {
			loadData:()=>{
			const store = getStore();
			fetch('https://www.swapi.tech/api/people/')
			.then((res) => res.json())
			.then((data) => {
				data.results.map((item) => {
				fetch(`https://www.swapi.tech/api/people/${item.uid}`)
					.then((res) => res.json())
					.then((data2) => {
					setStore({ people: [...store.people, data2.result] });
					});
				});
			})
			.catch((err) => console.error(err));

			fetch('https://www.swapi.tech/api/vehicles/')
			.then((res) => res.json())
			.then((data) => {
				data.results.map((item) => {
				fetch(`https://www.swapi.tech/api/vehicles/${item.uid}`)
					.then((res) => res.json())
					.then((data2) => {
					setStore({ vehicles: [...store.vehicles, data2.result] });
					});
				});
			})
			.catch((err) => console.error(err));

			fetch('https://www.swapi.tech/api/planets/')
			.then((res) => res.json())
			.then((data) => {
				data.results.map((item) => {
				fetch(`https://www.swapi.tech/api/planets/${item.uid}`)
					.then((res) => res.json())
					.then((data2) => {
					setStore({ planets: [...store.planets, data2.result] });
					});
				});
			})
			.catch((err) => console.error(err));
			}
			}
		}
	};


export default getState;
