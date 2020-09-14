
    class Pessoa {
    constructor(altura, peso, idade){
        this.altura = altura;
        this.peso = peso;
        this.idade = idade
        }
    };

    let pessoas =   [new Pessoa(0, 0, 0, 0),
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

let novoLengthPessoas = pessoas.length


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
            let stringIndiceRemover = String(indiceRemover)

            // pessoas[i].altura = 0;
            document.getElementById('txta-' + stringIndiceRemover).value = '';
            // pessoas[i].peso = 0;
            document.getElementById('txtp-' + stringIndiceRemover).value = '';
            // pessoas[i].idade = 0;
            document.getElementById('txti-' + stringIndiceRemover).value = '';


            
            
            let indiceDivRemover = String(indPessoa)
            
            let campoRemovido = document.getElementById('elementoDiv' + indiceDivRemover);
            campoRemovido.style.display = 'none'

            let novoTamanhoGrupo = novoLengthPessoas - 1
            
            break
        }


    }

    return {


    }

    analisar();

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


let global = (function(){

    let setupEventListeners = function() {

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


