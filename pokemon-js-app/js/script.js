var pokemonRepository = (function () {
    var repository = [
        // {
        //     name: 'Bulbasaur',
        //     pokemonId: 1,
        //     height: 0.7,
        //     weight: 6.9,
        //     species: 'Seed Pokemon',
        //     types: ['grass', 'poison'],
        //     abilities: 'Overgrow',
        //     image: src = "https://img.pokemondb.net/artwork/bulbasaur.jpg"

        // },
        // {
        //     name: 'Ivysaur',
        //     pokemonId: 2,
        //     height: 1.0,
        //     weight: 13.0,
        //     species: 'Seed Pokemon',
        //     types: ['grass', 'poison'],
        //     abilities: 'Overgrow',
        //     image: src = "https://img.pokemondb.net/artwork/ivysaur.jpg"

        // },
        // {
        //     name: 'Venusaur',
        //     pokemonId: 3,
        //     height: 2.0,
        //     weight: 100.0,
        //     species: 'Seed Pokemon',
        //     types: ['grass', 'poison'],
        //     abilities: 'Overgrow',
        //     image: src = "https://img.pokemondb.net/artwork/venusaur.jpg"

        // },
        // {
        //     name: 'Charmander',
        //     pokemonId: 4,
        //     height: 0.6,
        //     weight: 8.5,
        //     species: 'Lizard Pokemon',
        //     types: ['fire'],
        //     abilities: 'blaze',
        //     image: src = "https://img.pokemondb.net/artwork/charmander.jpg"

        // },
        // {
        //     name: 'Charmeleon',
        //     pokemonId: 5,
        //     height: 1.1,
        //     weight: 19.0,
        //     species: 'Flame Pokemon',
        //     types: ['fire'],
        //     abilities: 'blaze',
        //     image: src = "https://img.pokemondb.net/artwork/charmeleon.jpg"

        // },
        // {
        //     name: 'Charizard',
        //     pokemonId: 6,
        //     height: 1.7,
        //     weight: 90.5,
        //     species: 'Flame Pokemon',
        //     types: ['Fire', 'Flying'],
        //     abilities: 'blaze',
        //     image: src = "https://img.pokemondb.net/artwork/charizard.jpg"

        // },
        // {
        //     name: 'Squirtle',
        //     pokemonId: 7,
        //     height: 0.5,
        //     weight: 9.0,
        //     species: 'Tiny Turtle Pokemon',
        //     types: ['Water'],
        //     abilities: 'torrent',
        //     image: src = "https://img.pokemondb.net/artwork/squirtle.jpg"
        // },
        // {
        //     name: 'Wartortle',
        //     pokemonId: 8,
        //     height: 1.0,
        //     weight: 22.5,
        //     species: 'Flame Pokemon',
        //     types: ['Water'],
        //     abilities: 'torrent',
        //     image: src = "https://img.pokemondb.net/artwork/wartortle.jpg"
        // }

    ];
    // API FUNCTIONS
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

      function add(addPokemon) {
        repository.push(addPokemon);
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            var items = {};
            items.name = details.name;
            items.imageUrl = details.sprites.front_default;
            items.height = details.height;
            items.types = Object.keys(details.types);
            return items
        }).catch(function (e) {
            console.error(e);
        });
    }

  
    function getAll() {
        return repository;
    }
    //show pokemon function
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function (p) {
           
            document.getElementById(item.pokemonId)
            var printInfo = "<p>" + p.name +
            "<p> Height: "+ p.height +
            '</p> <img src=" ' + p.imageUrl + '"/>'

            document.querySelector('.pokedex-output').innerHTML = printInfo

        });
    }

    // function showDetails(pokemon) {
    //     document.getElementById(pokemon.pokemonId)
    //     var printInfo = "<p>" + pokemon.name + "</p>"
    //     document.querySelector('.pokedex-output').innerHTML = printInfo


    // }
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
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

// OUTPUT POKEMON NAME 


pokemonRepository.loadList().then(function (){
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})

