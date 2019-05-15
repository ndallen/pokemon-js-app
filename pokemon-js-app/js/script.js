var pokemonRepository = (function () {
    var repository = [
        {
            name: 'Bulbasaur',
            pokemonId:1,
            height: 0.7,
            weight:6.9,
            species:'Seed Pokemon',
            types: ['grass', 'poison'], 
            abilities: 'Overgrow',         
            image: src="https://img.pokemondb.net/artwork/bulbasaur.jpg"

        },
        {
            name: 'Ivysaur',
            pokemonId:2,
            height: 1.0,
            weight:13.0,
            species:'Seed Pokemon',
            types: ['grass', 'poison'], 
            abilities: 'Overgrow',            
            image: src="https://img.pokemondb.net/artwork/ivysaur.jpg"

        },
        {
            name: 'Venusaur',
            pokemonId:3,
            height: 2.0,
            weight:100.0,
            species:'Seed Pokemon',
            types: ['grass', 'poison'], 
            abilities: 'Overgrow',         
            image: src="https://img.pokemondb.net/artwork/venusaur.jpg"

        },
        {
            name: 'Charmander',
            pokemonId:4,
            height: 0.6,
            weight:8.5,
            species:'Lizard Pokemon',
            types: ['fire'], 
            abilities: 'blaze',   
            image: src="https://img.pokemondb.net/artwork/charmander.jpg"

        },
        {
            name: 'Charmeleon',
            pokemonId:5,
            height: 1.1,
            weight:19.0,
            species:'Flame Pokemon',
            types: ['fire'], 
            abilities: 'blaze',         
            image: src="https://img.pokemondb.net/artwork/charmeleon.jpg"

        },
        {
            name: 'Charizard',
            pokemonId:6,
            height: 1.7,
            weight:90.5,
            species:'Flame Pokemon',
            types: ['Fire', 'Flying'], 
            abilities:'blaze',    
            image: src="https://img.pokemondb.net/artwork/charizard.jpg"

        },
        {
            name: 'Squirtle',
            pokemonId:7,
            height: 0.5,
            weight:9.0,
            species:'Tiny Turtle Pokemon',
            types: ['Water'], 
            abilities:'torrent',    
            image: src="https://img.pokemondb.net/artwork/squirtle.jpg"
        },
        {
            name: 'Wartortle',
            pokemonId:8,
            height: 1.0,
            weight:22.5,
            species:'Flame Pokemon',
            types: ['Water'], 
            abilities:'torrent',    
            image: src="https://img.pokemondb.net/artwork/wartortle.jpg"
        },

    ];

    function add(repository) {
        pokemonRepository.push(repository);
    }
    function getAll() {
        return repository;
    }

    return {
        add: function (add) {
            repository.push(add);
        },
        getAll: function () {
            return repository;
        }
    };
})();

pokemonRepository.getAll().forEach(function (getAll) {

    if (getAll.height > 1.0) {

        document.write('<p>' + getAll.name + '\'s height is: ' + getAll.height + ' feet. Wow thats big..');
    } else {

        document.write('<p>' + getAll.name + '\'s height is: ' + getAll.height + ' feet.');
    }
});


