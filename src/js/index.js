

const personagens = document.querySelectorAll('.personagem');
console.log(personagens)


personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scroll({ top: 0, behavior: 'smooth' });
        }


        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        console.log(imagemPersonagemGrande);

        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');


        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');



    })
})