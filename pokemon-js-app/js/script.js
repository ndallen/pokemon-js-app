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
        add: function(add) {
            repository.push(add);
        },
        getAll: function() {
            return repository;
        }
    };
    
    // return {
    //     add: add,
    //     getAll: getAll
    // };


})();

Object.keys(pokemonRepository).forEach(function (getAll) {
    
    if (pokemonRepository.getAll()[1].height > 5.0) {

                document.write('<p>' + pokemonRepository.getAll()[1].name + '\'s height is: ' + pokemonRepository.getAll()[1].height + ' feet. Wow thats big..');
            } else {
             
                document.write('<p>' + pokemonRepository.getAll()[1].name + '\'s height is: ' + pokemonRepository.getAll()[1].height + ' feet.');
                    }

    // console.log(pokemonRepository.getAll()[0].name)
    // console.log(pokemonRepository.getAll());
});




// OLD FOR LOOP CODE THAT WORKED

    // for (var i = 0; i < repository.length; i++) {
    //     if (repository[i].height > 5.0) {
    //         document.write('<p>' + repository[i].name + '\'s height is: ' + repository[i].height + ' feet. Wow thats big..');
    //     } else {
    //         document.write('<p>' + repository[i].name + '\'s height is: ' + repository[i].height + ' feet.');
    //     }

    // }