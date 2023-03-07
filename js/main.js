//ho creato le stringe e ho dato i valori dentro ogni stringa
let gridDom = document.getElementById('grid');
let caselledaSelezionareDom = document.getElementById('casellaSelezione');
let facileDom = document.getElementById('facile');
let medioDom = document.getElementById('medio');
let dificileDom = document.getElementById('dificile');
let myscoreDom = document.getElementById('titolo');

let domButton = document.querySelector('#playBtn');

let valoreGioco = 'facileDom';

caselledaSelezionareDom.addEventListener('change',
    function(){
     if(caselledaSelezionareDom.value == 2){
        valoreGioco = 'medioDom';
     }else if(caselledaSelezionareDom.value == 3){
        valoreGioco = 'dificileDom';
     }else{
        valoreGioco = 'facileDom';
     }
}
);






domButton.addEventListener('click',
     function(){
            gridDom.innerHTML="";
            let nrcaselle = "";
            let sizeCaselle = '';
          
            let freeCells = [];
            let gameOver = false;

            if (valoreGioco === 'facileDom'){
                nrcaselle = 100;
                sizeCaselle ='easy';
            }else if (valoreGioco ==='medioDom'){
                nrcaselle = 81;
                sizeCaselle ='medium';
            }else{
                nrcaselle = 49;
                sizeCaselle ='hard';
            }
            sizeCaselle = Math.sqrt(nrcaselle); 

           
            
           
            
             // creo le bombe
             let numberOfBombs = 16;
             let arraybombe = [];
             arraybombe = createBombs(nrcaselle,numberOfBombs);
             console.log(arraybombe);


            for (let i = 1; i <= nrcaselle ; i++) {

                let currentElement = createNewSquare(i,nrcaselle);
            
                currentElement.addEventListener('click', function() {
                    if (!gameOver){
                        this.classList.toggle('blue');
                        console.log(i);
    
    
                        casellacliccata = i;
                        let bombatrovata = false;
                        for (let i = 0; i<arraybombe.length; i++){
                            if(casellacliccata == arraybombe[i]){
                                bombatrovata = true;
                                
                            }
                        }
                        if (bombatrovata == true){ //sono saltato su una bomba
                            currentElement.classList.add('red');
                            gameOver = true;
                            discoverBombs(arraybombe);
                            myscoreDom.innerHTML = "Game over - Il tuo punteggio è:" + freeCells.length;
                        }else{
                            currentElement.classList.add('blue');
                           
                           if (!freeCells.includes(i)){
                            freeCells.push(i);
                           }

                           let checkWinner = win(freeCells, nrcaselle);
                           if (checkWinner){
                            myscoreDom.innerHTML = "Complimenti hai vinto";
                           }else{
                            myscoreDom.innerHTML = "Il tuo punteggio è:" + freeCells.length;
                           } 
                           
                        }  
                    }
                   
                    

                });
               
               
                gridDom.append(currentElement);
            }
           console.log(nrcaselle); 

function win (freeCells, nrcaselle){
    let maxFreeCell = nrcaselle -16;
    if (freeCells.length == maxFreeCell){
        return true;
    }else {
        return false;
    }
}




function discoverBombs(arraybombe){
    const currentElement = document.getElementsByClassName('square');
    console.log(currentElement);
    for (let i = 0; i <currentElement.length; i++){
        if (arraybombe.includes((i + 1))) {
            currentElement[i].classList.add('red');
        }
    }
}

          // Funzione che crea ogni singolo box all'interno del grid principale
           function createNewSquare(numero) {
            let currentElement = document.createElement('div');
            currentElement.classList.add('square');
            currentElement.append(numero);
            currentElement.classList.add(sizeCaselle);
            currentElement.style.width = `calc(100% / ${sizeCaselle})`;
            currentElement.style.height = `calc(100% / ${sizeCaselle})`;
           
            return currentElement;
        
        }

});


function createBombs(maxRangeNumber, numberOfBombs){
    let arrayNumber = [];
    while(arrayNumber.length < numberOfBombs){
        const randomNum = getRndInteger(1, maxRangeNumber);

        if(!arrayNumber.includes(randomNum)) {
            arrayNumber.push(randomNum);
        }
    }

    return arrayNumber;
}


// Funzione che genera un numero random tra 2 valori max e min (inclusi)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }







