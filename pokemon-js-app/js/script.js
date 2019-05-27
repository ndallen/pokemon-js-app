var pokemonRepository = (function () {
    var repository = [
        {
            name: 'Bulbasaur',
            pokemonId: 1,
            height: 0.7,
            weight: 6.9,
            species: 'Seed Pokemon',
            types: ['grass', 'poison'],
            abilities: 'Overgrow',
            image: src = "https://img.pokemondb.net/artwork/bulbasaur.jpg"

        },
        {
            name: 'Ivysaur',
            pokemonId: 2,
            height: 1.0,
            weight: 13.0,
            species: 'Seed Pokemon',
            types: ['grass', 'poison'],
            abilities: 'Overgrow',
            image: src = "https://img.pokemondb.net/artwork/ivysaur.jpg"

        },
        {
            name: 'Venusaur',
            pokemonId: 3,
            height: 2.0,
            weight: 100.0,
            species: 'Seed Pokemon',
            types: ['grass', 'poison'],
            abilities: 'Overgrow',
            image: src = "https://img.pokemondb.net/artwork/venusaur.jpg"

        },
        {
            name: 'Charmander',
            pokemonId: 4,
            height: 0.6,
            weight: 8.5,
            species: 'Lizard Pokemon',
            types: ['fire'],
            abilities: 'blaze',
            image: src = "https://img.pokemondb.net/artwork/charmander.jpg"

        },
        {
            name: 'Charmeleon',
            pokemonId: 5,
            height: 1.1,
            weight: 19.0,
            species: 'Flame Pokemon',
            types: ['fire'],
            abilities: 'blaze',
            image: src = "https://img.pokemondb.net/artwork/charmeleon.jpg"

        },
        {
            name: 'Charizard',
            pokemonId: 6,
            height: 1.7,
            weight: 90.5,
            species: 'Flame Pokemon',
            types: ['Fire', 'Flying'],
            abilities: 'blaze',
            image: src = "https://img.pokemondb.net/artwork/charizard.jpg"

        },
        {
            name: 'Squirtle',
            pokemonId: 7,
            height: 0.5,
            weight: 9.0,
            species: 'Tiny Turtle Pokemon',
            types: ['Water'],
            abilities: 'torrent',
            image: src = "https://img.pokemondb.net/artwork/squirtle.jpg"
        },
        {
            name: 'Wartortle',
            pokemonId: 8,
            height: 1.0,
            weight: 22.5,
            species: 'Flame Pokemon',
            types: ['Water'],
            abilities: 'torrent',
            image: src = "https://img.pokemondb.net/artwork/wartortle.jpg"
        }

    ];

    function add(repository) {
        pokemonRepository.push(repository);
    }
    function getAll() {
        return repository;
    }
    //show pokemon function
    function showDetails(pokemon) {
        document.getElementById(pokemon.pokemonId)
        var printInfo = "<p>" + pokemon.name + "</p>"
        document.querySelector('.pokedex-output').innerHTML = printInfo


    }
    function addListItem(pokemon) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.classList.add('list-group-item');
        li.setAttribute('id', pokemon.pokemonId);
        li.onclick = function () {
            return showDetails(pokemon);
        }
        li.appendChild(document.createTextNode(pokemon.name));
        ul.appendChild(li);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

// OUTPUT POKEMON NAME 

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

