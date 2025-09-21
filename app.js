// Array para armazenar os nomes dos amigos
let amigos = []
// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo')
    const nome = input.value.trim()

    if (nome === "") {
        alert("Por favor, insira um nome.")
        return
    }

    amigos.push(nome)
    input.value = ""
    atualizarListaAmigos()
}
// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = "" // Limpa a lista

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}
// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado')

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo cadastrado para sorteio.</li>"
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length)
    const nomeSorteado = amigos[indiceAleatorio]

    resultado.innerHTML = `<li>Amigo sorteado: ${nomeSorteado}</li>`
}