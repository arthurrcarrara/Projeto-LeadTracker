class Pessoa {
    constructor(altura, peso, idade){
        
        this.altura = altura;
        this.peso = peso;
        this.idade = idade
    }
};

function elementoDiv(el) {
    let value = Number(document.getElementById(el).value);
    return value;
};

function Adicionar() {

    let field = document.getElementById('dados');

    // let novaPessoa = pessoas.length

    let novoCampo = `<div>
    <p>Pessoa 1</p>
    <p>Altura<input type="number" name="txta1" id="txta1"></p>
    <p>Peso<input type="number" name="txtp1" id="txtp1"></p>
    <p>Idade <input type="number" name="txti1" id="txti1"></p>
    <hr>
    </div>`;

    field.insertAdjacentHTML('beforeend', novoCampo );

};


function Analisar(){

    let res = document.getElementById('res');

    //CLASS PESSOAS
    const pessoas = [new Pessoa((elementoDiv('txta-1')), (elementoDiv('txtp-1')), (elementoDiv('txti-1'))),
                     new Pessoa((elementoDiv('txta-2')), (elementoDiv('txtp-2')), (elementoDiv('txti-2'))),
                     new Pessoa((elementoDiv('txta-3')), (elementoDiv('txtp-3')), (elementoDiv('txti-3')))];

    let valorAltura = pessoas.map(a => a.altura).reduce(function(acumulador,atual){
        return acumulador + atual
    });

    const mediaAltura = ( valorAltura / pessoas.length);

    let valorPeso = pessoas.map(a => a.peso).reduce(function(acumulador,atual){
        return acumulador + atual
    });

    const mediaPeso = ( valorPeso / pessoas.length);

    let valorIdade = pessoas.map(a => a.idade).reduce(function(acumulador,atual){
        return acumulador + atual
    });

    const mediaIdade = ( valorIdade / pessoas.length);


    console.log(pessoas);
    console.log(mediaAltura,mediaPeso,mediaIdade);


    //DISPLAY DA ANALISE DE DADOS
    res.innerHTML += `Altura media do grupo: ${mediaAltura}`
    res.innerHTML += '<p></p>'

    res.innerHTML += '<p></p>'

    res.innerHTML += `Peso medio do grupo: ${mediaPeso}`
    res.innerHTML += '<p></p>'


    res.innerHTML += `Idade media do grupo: ${mediaIdade}`

};