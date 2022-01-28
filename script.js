//Crie uma mensagem no console que você vá comer lasanha E o molho seja bolonhesa
let comida = "lasanha"
let molho = "bolonhesa"

if (comida == "lasanha" && molho == "bolonhesa"){
    console.log("Que delicia, hoje o cardapio será lasanha ao molho bolonhesa")
} else {
    console.log("Ainda não sabemos o cardápio do dia")
}


//1 - Criar um loop que conte de 1 até 20 usando FOR que conte os números ímpares
for (let loop = 1; loop <= 20; loop += 2){
    console.log(loop)
}

//2 - Criar um loop que conte de 20 até 1 usando WHILE que conte os números pares
let loop = 20

while(loop >= 1){
    console.log(loop)
    loop-=2
}

// crie uma função que receba comida como (parâmetro) e exiba no console
function exibaComida(escolha){
    console.log(`A comida escolhida pelo usuário foi ${escolha}.`)
}
exibaComida("lasanha");

// crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba no console
function guy(person, city, fruit){ 
	console.log(`Seu personagem é ${person}, sua cidade é ${city} e sua fruta preferida é ${fruit}!`)}
guy("Tiago", "Salvador", "Banana")
guy("Mônica", "Rio", "Morango")

// Utilize um método para adicionar dois nomes ao fim do array.
let languages = ["python", "C", "JavaScript", "React", "English", "French"];
languages.push("PHP", "Rust")
console.log(languages)

// Utilize um método para remover o primeiro nome do array.
languages.shift()
console.log(languages)

// Utilize um método para organizar em ordem alfabética
languages.sort()
console.log(languages)

//crie um array chamado pessoas contendo ao menos 3 objetos. 
//cada objeto deve receber as seguintes propriedades: nome, idade, altura e musicas
//na propriedade musicas adicione ao menos 3 itens
let pessoas = {
    usuarios: [
        {
            nome: 'Nome1',
            idade: 20,
            altura: 1.88,
            musicas: ['música1', 'música2', 'música3']
        },
        {
            nome: 'Nome2',
            idade: 40,
            altura: 1.8,
            musicas: ['mUsica1', 'mUsica2', 'mUsica3']
        },
        {
            nome: 'Nome3',
            idade: 32,
            altura: 1.68,
            musicas: ['múSica1', 'múSica2', 'múSica3']
        }
    ]
}

//monstre no console uma musica de cada lista
console.log(pessoas.usuarios[0].musicas[0])
console.log(pessoas.usuarios[1].musicas[0])
console.log(pessoas.usuarios[2].musicas[2])