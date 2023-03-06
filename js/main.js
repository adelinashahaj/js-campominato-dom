//ho creato le stringe e ho dato i valori dentro ogni stringa
let gridDom = document.getElementById('grid');
let caselledaSelezionareDom = document.getElementById('casellaSelezione');
let facileDom = document.getElementById('facile');
let medioDom = document.getElementById('medio');
let dificileDom = document.getElementById('dificile');

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
             const numberOfBombs = 16;
             let arraybombe = [];
             arraybombe = createBombs(nrcaselle,numberOfBombs);
             console.log(arraybombe);


            for (let i = 1; i <= nrcaselle ; i++) {

                let currentElement = createNewSquare(i,nrcaselle);
            
                currentElement.addEventListener('click', function() {
                    this.classList.toggle('blue');
                    console.log(i);


                    casellacliccata = i;
                    let bombatrovata = false;
                    for (let i = 0; i<arraybombe.length; i++){
                        if(casellacliccata == arraybombe[i]){
                            bombatrovata = true;
                        }
                    }
                    if (bombatrovata == true){
                        currentElement.classList.add('red');
    
                    }else{
                        currentElement.classList.add('blue');
                    }
                    

                });
               
                gridDom.append(currentElement);
            }
           console.log(nrcaselle); 








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







