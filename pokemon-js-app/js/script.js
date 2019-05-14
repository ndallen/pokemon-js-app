var pokemonRepository = (function () {
    var repository = [
        {
            name: 'Bulbasaur',
            height: 2.4,
            types: ['grass', 'poison']
        },
        {
            name: 'Charizard',
            height: 5.7,
            types: ['fire', 'flying']
        },
        {
            name: 'Butterfree',
            height: 3.7,
            types: ['bug', 'flying']
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

    if (getAll.height > 5.0) {

        document.write('<p>' + getAll.name + '\'s height is: ' + getAll.height + ' feet. Wow thats big..');
    } else {

        document.write('<p>' + getAll.name + '\'s height is: ' + getAll.height + ' feet.');
    }
});
