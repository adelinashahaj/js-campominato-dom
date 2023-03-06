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
        console.log(valoreGioco);
     }else if(caselledaSelezionareDom.value == 3){
        valoreGioco = 'dificileDom';
        console.log(valoreGioco);
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

            for (let i = 1; i <= nrcaselle ; i++) {

                let currentElement = createNewSquare(i,nrcaselle);
            
                currentElement.addEventListener('click', function() {
                    this.classList.toggle('clicked');
                    console.log(i);
                });
                
                gridDom.append(currentElement);
            }
           console.log(nrcaselle); 
           
           


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
