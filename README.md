# Pokédex Project
A simple Pokédex using React.

## Overview
This was a simple Pokédex application to put newly acquired skills and practices in practice. This solitary project allowed me to build an app using "PokéApi" RESTful API and only rely on styled-components to create scalable and reusable components having SOLID principles in mind. It was a 2 days project. 

I recently got into Redux-Saga but never used it coupled with API requests so this project was a good way to find out how sagas could be used to handle API calls and side-effects. On top of that, I recently check Airbnb code and could see how they were fully relying on styled-components to build their components which felt like an attractive idea that made a lot of sense. From then, I've clearly wanted to explore the power of styled-components by building an app relying fully on it. 

( yanisdib.github.io/pokedex )



## Project timeline and technologies used

Build a React application in 2 days to showcase and develop the following:
* My technical skill set
* An application fully relying on styled-components and Redux-Saga
* API manipulation
* Coding speed

## Stack - Technologies used

* HTML5
* CSS3
* JavaScript (ES6)
* styled-components
* Git
* GitHub
* React
* Redux-Saga
* PokéApi API
* Enzyme
* Jest
* Hooks
* React-Router
* Axios


## Approach Taken
I started by designing a simple UI on Adobe Photoshop to have a big picture of what I wanted to build. I then documented myself on the PokéApi in order to figure out and write out the process and functions, as well as custom hooks, I would have to develop in order to get and manipulate data I would need to implement the features I skecthed beforehand. I finally started to build out the frontend using React and Redux-Saga. I could use React Context, as powerful and useful as it is, instead of Saga to manage the global state and side effects but I preferred to rely on something I genuinely wanted to learn more in depth. Lastly I did the High-Order Components that would only help to handle Loading components in a more effective and reusable way. I tried as much as I could to have SOLID principles and React/Redux (Saga) best practices in mind during the whole development process.


## Wins and Blockers

### Wins
I could learn a few things and tricks on styled-components, High-Order Components, Functions and Reducers, custom Hooks and API manipulation with Redux-Saga. Thinking the process beforehand instead of jumping into water right away also helped me to develop this project in a more organized way that made me save some precious time. This wasn't perfect but I could at least enjoy the process. In the end, I developed a real love for styled-components and how convenient they are.

### Blockers
If I was to make the app again I would have taken a different approach with TDD principles. I try to add tests as much as I can but I get easily overwhelmed by the passion and the joy of coding immediate results. I recently learned about Test Driven Development through a course I bought and this completely changed the way I see a development process; it made a lot of sense so I would definitely give more importance to tests. Despite knowing how to develop them, I would have also added a few more features using the API like a pagination using a High-Order Reducer and more options of searches. And lastly, the UI could be highly improved and I could design something more "eye candy-esque" but I'm a perfectionnist very harsh and critical with myself so I decided to go with something simple and not lose more time.

## Visuals and Featured Code 


![Imgur](https://i.imgur.com/Rmvmupj.png)


### Featured piece of code no.1

Once the component mounts, this 'usePokemon' custom hook dispatch an action with default settings (offset, limit) to our Redux store every time the user changes the settings. A Pokemon saga is going to handle the resulting actions and return the appropriate results depending on the Promise returned by the API call. The pokemon and filters state are then assigned to a variable (object) and the pokemon object is therefore destructured to get an array containing our Pokémon data, our current loading status and an error returned by an action triggered if the API call failed. Lastly, a variable is assigned with the value returned by a custom selector that returns a filtered array of Pokémon from the pokemon and filters passed as arguments. This hooks finally returns the Pokémon data, the current loading status and error if there is any.

```javascript
    export default (settings) => {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchPokemonRequest(settings));
        }, [settings]);

        const pokemon = useSelector(state => state.pokemon);
        const filters = useSelector(state => state.filters);

        const { data, isLoading, error } = pokemon;

        const filteredData = filteredPokemon(data, filters);

        return [filteredData, isLoading, error];
    }
```

![Imgur](https://i.imgur.com/YTbx893.png)


### Featured piece of code no.2

This allows us to search for a specific/set of Pokémon via their name, type and order.

```javascript
export default (pokemon, { text, type, sortBy }) => {
    return pokemon
        .filter((currentPokemon) => {
            const textMatch = currentPokemon.name.includes(text.toLowerCase());
            const typeMatch = currentPokemon.types.some(slot => slot.type.name.includes(type));

            return textMatch && typeMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'desc') return a.id - b.id;
            return b.id - a.id;
        });
}
```

![Imgur](https://i.imgur.com/W2J0p7l.png)