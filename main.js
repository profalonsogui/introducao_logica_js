console.log("Aprendendo lógica com javascript");
console.log("===================");

// VARIAVEIS
let nome = "Pedro"
let idade = 18
console.log("Seja bem-vindo,", nome, " e a idade é ", idade)

// ESTRUTURA CONDICIONAL
if (idade >= 18){
    console.log(nome, " já pode dirigir.")
} else{
    console.log("não pode dirigir.")
}

/**
 * ==
 * >
 * <
 * >=
 * <=
 * && E
 * || OU
 */

let nota = 10

if (nota >= 9){
    console.log("Excelente")
} else if(nota <= 7 && nota == 8){
    console.log("BOM")
}else{
    console.log("reprovado")
}