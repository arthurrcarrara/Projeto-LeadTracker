
    class Pessoa {
    constructor(altura, peso, idade){
        this.altura = altura;
        this.peso = peso;
        this.idade = idade
        }
    };

    const pessoas = [new Pessoa(0, 0, 0, 0),
                     new Pessoa(0, 0, 0, 0),
                     new Pessoa(0, 0, 0, 0)];

    class Medias {
        constructor(mAltura, mPeso, mIdade){
            this.mAltura = mAltura;
            this.mPeso = mPeso;
            this.mIdade = mIdade;
        }
    }

    // const mediasGrupo = [new Medias(0, 0, 0)];

//Atalho de valores para os campos INPUT
function elementoDiv(ID) {
    let valor = Number(document.getElementById(ID).value);
    return valor;
};


function adicionar() {


    let field = document.getElementById('dados');

    let indicePessoa = pessoas.length;
        indicePessoa += 1;

    let novoCampo = `<div id="elementoDiv${indicePessoa}">
                    <div id="removerDiv"><p></p>Pessoa ${indicePessoa}<input type="button" value="Remover" id="btn-remover" onclick='remover(${indicePessoa})'></div>


                    <p>Altura<input type="number" name="txta-${indicePessoa}" id="txta-${indicePessoa}"></p>
                    <p>Peso<input type="number" name="txtp-${indicePessoa}" id="txtp-${indicePessoa}"></p>
                    <p>Idade<input type="number" name="txti-${indicePessoa}" id="txti-${indicePessoa}"></p><hr>

                    </div>`;

    pessoas.push(new Pessoa(0, 0, 0,));

    field.insertAdjacentHTML('beforeend', novoCampo );


};


function remover(indicePessoa){

    let indPessoa = indicePessoa; //4,5,6 (parametro da DIV)
    let indiceRemover = indPessoa - 1; //3,4,5

    for(var i = 0; i < pessoas.length; i++){
        if(pessoas[i] === pessoas[indiceRemover]){
            console.log(pessoas[i])
            pessoas.splice(indiceRemover, 1); //Acaba retornado um novo array.
            
            
            let indiceDivRemover = String(indPessoa)
            
            let campoRemovido = document.getElementById('elementoDiv' + indiceDivRemover);
            campoRemovido.style.display = 'none'
            
            break
        }


    }

    // console.log(`let indiceRemover = ${indiceRemover}`)
    // let teste = pessoas[indiceRemover]
    // console.log(teste);

    // pessoas.splice(indiceRemover, 1);


    // let indiceDivRemover = String(indPessoa)
    // String(indiceRemover + 1)
    // console.log(`let indiceDivRemover = ${indiceDivRemover}`) //6

    // let campoRemovido = document.getElementById('elementoDiv' + indiceDivRemover);
    // campoRemovido.style.display = 'none'

    // analisar();
    

    // A FUNCAO REMOVE O ELEMENTO DO ARRAY, REMOVE A DIV, E NAO ATUALIZA A ANALISE
    // let valorDiv = document.getElementById('removerDiv').innerText; //Acesso ao ${indicePessoa} da div#removerDiv
    // console.log(valorDiv)
    
    // let elemento = valorDiv.split(" "); // [Pessoa, 4]
    // console.log(`let elemento = ${elemento}`)
    
    // let indiceRemover = indPessoa - 1; //4
    // console.log(`let indiceRemover = ${indiceRemover}`)


    // // pessoas.splice(indiceRemover, 1);

    // let indiceDivRemover = String(indPessoa)

    // // String(indiceRemover + 1)
    // console.log(`let indice = ${indiceDivRemover}`)

    // let campoRemovido = document.getElementById('elementoDiv' + indiceDivRemover);
    // campoRemovido.remove();

    // analisar();
};



function analisar(){

    let res = document.getElementById('res');

    res.innerHTML = ' ';

    for(let i = 0; i < pessoas.length; i++){
        let indiceID = i + 1;
        let txtValor = String(indiceID)
        
        //Percorrendo o array pessoas e atribuindo os valores input.
        pessoas[i].altura = elementoDiv('txta-' + txtValor)
        pessoas[i].peso = elementoDiv('txtp-' + txtValor)
        pessoas[i].idade = elementoDiv('txti-' + txtValor )


    };

    let valorAltura = pessoas.map(a => a.altura).reduce(function(acumulador,atual){
        return acumulador + atual;
    });

    let mediaAltura = ( valorAltura / pessoas.length );

    let valorPeso = pessoas.map(a => a.peso).reduce(function(acumulador,atual){
        return acumulador + atual
    });

    let mediaPeso = ( valorPeso / pessoas.length );

    let valorIdade = pessoas.map(a => a.idade).reduce(function(acumulador,atual){
        return acumulador + atual
    });

    let mediaIdade = ( valorIdade / pessoas.length );


    let mGrupo = new Medias(mediaAltura, mediaPeso, mediaIdade);
    console.log(mGrupo)
    
    // // mediaAltura = mediasGrupo.mAltura;
    // mediasGrupo.mPeso = mediaPeso;
    // mediasGrupo.mIdade = mediaIdade;


    // console.log(pessoas);
    // console.log(mediaAltura,mediaPeso,mediaIdade);


    //DISPLAY DA ANALISE DE DADOS

    res.innerHTML = `Altura media do grupo: ${mGrupo.mAltura}
                    <p></p>
                    <p></p>
                    Peso medio do grupo: ${mGrupo.mPeso}
                    <p></p>
                    Idade media do grupo: ${mGrupo.mIdade}`






    // res.innerHTML += `Altura media do grupo: ${mGrupo.mAltura}`
    // res.innerHTML += '<p></p>'

    // res.innerHTML += '<p></p>'

    // res.innerHTML += `Peso medio do grupo: ${mGrupo.mPeso}`
    // res.innerHTML += '<p></p>'


    // res.innerHTML += `Idade media do grupo: ${mGrupo.mIdade}`

};


var global = (function(){

    var setupEventListeners = function() {

        document.getElementById('btn-adicionar').addEventListener('click', adicionar);

        // document.getElementById('btn-remover').addEventListener('click', remover);

        document.getElementById('btn-analise').addEventListener('click', analisar);

    };

    return setupEventListeners();
    

}) ();





// const mediasGrupo = [new Medias(0, 0, 0)];



// function mediaValor(el) {
//     pessoas.map(a => a.el).reduce(function(acumulador,atual){
//     return acumulador + atual
// };



//  function mediaValor(el) {
//     pessoas.map(a => a.el).reduce(function(acumulador,atual){
//     return acumulador + atual
// });


