// Je définis mes variables
var less = "C'est plus petit";
var more = "C'est plus grand";
var victory = "Trouvé, c'est gagné";
var value = 0;
var valuemin = 1;
var valuemax = 10;
var random = Math.floor(Math.random()*(valuemax-valuemin))+valuemin;
console.log(random);
var entry = document.querySelector('#entry');

function testGo(){
    console.log(entry.value);
    // Je donne mes conditions
    if(entry < random ){
        "less"
    }

    else if(entry > random){
        "more"
    }
    
    else if(entry == random){
        "victory"
    }
}