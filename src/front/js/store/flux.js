const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites : [ ],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      addFavorite: (pokemon) => {
				const store = getStore();
				if( !store.favorites.includes(pokemon) )
				setStore({ favorites: [ ...store.favorites, pokemon  ]})
			},

      deleteFavorite: (pokemon) => {
				const store = getStore();
				setStore({ favorites: [ ...store.favorites.filter( x=> x != pokemon)  ]})
			},

      // getPokemon: async (id) => {
      //   let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      //   let body = await response.json();
      //   return body;
      // },

      //  searchPokemon: async (pokemon) => {
      //    try {
      //      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      //      const response = await fetch(url);
      //      const body = await response.json();
      //      return body;
      //    } catch (error) {
      //      console.error(error);
      //    }
      //  },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
