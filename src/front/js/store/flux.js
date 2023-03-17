const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tokenUserLogin: null,
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
      ///////Sincronizacion del Token
      syncToken: () => {
        const token = localStorage.getItem("token");
        console.log("Aplicacion recien cargada, sincronizando localStorage token");
        if(token && token != "" && token != undefined) setStore({ tokenUserLogin: token });

      },
      logout: () => {
        localStorage.removeItem("token");
        console.log("Logout");
        setStore({ tokenUserLogin: null });
      },

       ///////Funcion de registro

      registro: async (nombre, apellido, email, phone, password) => {
        const store = getStore();
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/registro", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              nombre: nombre,
              apellido: apellido,
              phone: phone,
            }),
          });
          if (!response.ok) {
            alert("Error al crear el usuario");
            return false;
          }
          //alert("Usuario creado");
          console.log("Usuario creado exitosamente")

          const body = await response.json();
          console.log(body)
          return true;

        } catch (error) {
          console.error(error);
        }
      },

      ////// Funcion de login

      login: async (email, password) => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          if (!response.ok) {
            alert("Error iniciando sesión");
            return false;
          }
          //alert("Haz iniciado sesión exitosamente");
          console.log("Haz iniciado sesión exitosamente");
          const body = await response.json();
          console.log(body);

          localStorage.setItem("tokenUserLogin", body.access_token);
          // localStorage.setItem("role", body.role);
          // localStorage.setItem("id", body.id);
          setStore({ tokenUserLogin: body.access_token });
          return true;

          // actions.setAutUsuario(body);
          // navigate(`/${body.role}/profile/${body.id}`);
        } catch (error) {
          console.error("Ocurrio un error en el inicio de sesión");
        }
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
