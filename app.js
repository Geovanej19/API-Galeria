'use strict'

async function getUrlImagens(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    return data.message
}

function criarFoto(urlFoto){
    const foto = document.createElement('img')
    foto.src = urlFoto
    foto.className = 'foto'
    return foto
}

async function preencherGaleria (){
    const galeria = document.getElementById('container-galeria')
    const raca = document.getElementById('raca').value.toLowerCase().trim()
    const urlImagens = await getUrlImagens(raca)

    const fotos = urlImagens.map(criarFoto)

    galeria.replaceChildren(...fotos)
}

document.getElementById('pesquisar')
        .addEventListener('click', preencherGaleria)