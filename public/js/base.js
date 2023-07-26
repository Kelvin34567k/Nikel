const nome = "Kelvin Blankenburg";
let nome2 = "";
let pessoaDefault = {
    nome: "Kelvin Blankenburg",
    idade: "16",
    trabalho: "Estudante"
}

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Kelvin Blankenburg",
        idade: "16",
        trabalho: "Estudante"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    },
    {
        nome: "Pedro Silva",
        idade: "50",
        trabalho: "Engenheiro"
    }
];

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novonome) {
    nome2 = novonome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
console.log(pessoa.nome);

console.log("idade:");
console.log(pessoa.idade);

console.log("trabalho:");
console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoa() {
    console.log("--------IMPRIMIR PESSOA")
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);
        
        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoa();

adicionarPessoa({
    nome: "Antônio",
    idade: "8",
    trabalho: "Estudante"
})

imprimirPessoa();

//console.log(pessoas);

//console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "25",
//    trabalho: "UX/UI Designer"
//})

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva")

//alterarNome();