// Je définis mes variables
var value = 0;
var valuemin = 1;
var valuemax = 10;
var random = Math.floor(Math.random()*(valuemax-valuemin))+valuemin;
console.log(random);
var entrynumber = null;

function testGo(){
    
    // Je récupère les saisies
    var entry = document.querySelector('#entry').value;
    var entry1 = document.querySelector(".entry1");
    var entry2 = document.querySelector(".entry2");
    var entry3 = document.querySelector(".entry3");
    entrynumber++;
    console.log(entrynumber);

    // Je donne mes conditions
    if(entry < random && entrynumber==1){
        entry1.innerHTML = "C'est plus grand, plus que deux essaies.";
    }

    else if(entry > random && entrynumber==1){
        entry1.innerHTML = "C'est plus petit, plus que deux essaies.";
    }
    
    else if(entry < random && entrynumber==2 ){
        entry2.innerHTML = "C'est plus grand, plus qu'un essaie.";
    }

    else if(entry > random && entrynumber==2 ){
        entry2.innerHTML = "C'est plus petit, plus qu'un essaie.";
    }

    else if(entry != random && entrynumber==3 ){
        entry3.innerHTML = "C'est perdu, dommage...";
        var refreshButton = document.createElement("a");
        refreshButton.href = "index.html";
        refreshButton.className = "mx-auto btn btn-success";
        refreshButton.textContent = "Une nouvelle partie ?";
        entry3.appendChild(refreshButton);
    }

    if (entry == random) {
        entry3.innerHTML = "C'est trouvé, bravo !";
        var refreshButton = document.createElement("a");
        refreshButton.href = "index.html";
        refreshButton.className = "mx-auto btn btn-success";
        refreshButton.textContent = "Une nouvelle partie ?";
        entry3.appendChild(refreshButton);
    }    
}