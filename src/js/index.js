const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const imagemFundo = document.querySelector(".fundo");



botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
})



const botaoPokeball = document.getElementById("botao-pokeball");
const guardarPokemons1 = document.querySelector(".bulbasaur");
const guardarPokemons2 = document.querySelector(".ivysaur");
const guardarPokemons3 = document.querySelector(".venusaur");
const guardarPokemons4 = document.querySelector(".charmander");
const guardarPokemons5 = document.querySelector(".charmeleon");
const guardarPokemons6 = document.querySelector(".charizard");
const guardarPokemons7 = document.querySelector(".squirtle");
const guardarPokemons8 = document.querySelector(".wartortle");
const guardarPokemons9 = document.querySelector(".blastoise");
const guardarPokemons10 = document.querySelector(".caterpie");


botaoPokeball.addEventListener("click", () => {
    const pokemonsEstaoGuardados = body.classList.contains("pokemons-guardados");

    body.classList.toggle("pokemons-guardados")

    if (pokemonsEstaoGuardados) {
        guardarPokemons1.setAttribute("src", "./src/imagens/bulbasaur.gif")
    } else {
        guardarPokemons1.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons2.setAttribute("src", "./src/imagens/ivysaur.gif")
    } else {
        guardarPokemons2.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons3.setAttribute("src", "./src/imagens/venusaur.gif")
    } else {
        guardarPokemons3.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons4.setAttribute("src", "./src/imagens/charmander.gif")
    } else {
        guardarPokemons4.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons5.setAttribute("src", "./src/imagens/charmeleon.gif")
    } else {
        guardarPokemons5.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons6.setAttribute("src", "./src/imagens/charizard.gif")
    } else {
        guardarPokemons6.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons7.setAttribute("src", "./src/imagens/squirtle.gif")
    } else {
        guardarPokemons7.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons8.setAttribute("src", "./src/imagens/wartortle.gif")
    } else {
        guardarPokemons8.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons9.setAttribute("src", "./src/imagens/blastoise.gif")
    } else {
        guardarPokemons9.setAttribute("src", "./src/imagens/pokeball.png")
    }

    if (pokemonsEstaoGuardados) {
        guardarPokemons10.setAttribute("src", "./src/imagens/caterpie.gif")
    } else {
        guardarPokemons10.setAttribute("src", "./src/imagens/pokeball.png")
    }
})