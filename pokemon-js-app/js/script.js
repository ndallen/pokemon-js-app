var repository = [
    {
    name:'Bulbasaur',
    height:'2\" 04',
    types: ['grass', 'poison']
    },
    {
    name:'Charizard',
    height:'5\" 07',
    types: ['fire', 'flying']
    },
    {
    name:'Butterfree',
    height:'3\" 07',
    types: ['bug', 'flying']
        },
];

for(var i = 0; i < repository.length ; i++) {
 document.write('<p>' + repository[i].name + '\'s height is: ' + repository[i].height);
}