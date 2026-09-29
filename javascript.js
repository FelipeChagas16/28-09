```javascript
const perguntas = [
    {
        pergunta: "Assim que sai da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        pergunta: "Você precisa fazer um trabalho para a escola e uma inteligência artificial oferece ajuda. O que você faz?",
        alternativas: [
            "Uso a IA para aprender e conferir minhas ideias.",
            "Deixo a IA fazer todo o trabalho."
        ]
    },
    {
        pergunta: "Você recebeu uma imagem criada por inteligência artificial. O que deve fazer antes de acreditar nela?",
        alternativas: [
            "Verificar se a informação é verdadeira.",
            "Compartilhar imediatamente."
        ]
    }
];

let atual = 0;
let historiaFinal = "";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    caixaPerguntas.textContent = perguntas[atual].pergunta;
    caixaAlternativas.innerHTML = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    perguntas[atual].alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa;

        botao.addEventListener("click", () => {
            historiaFinal += alternativa + " ";
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";

    textoResultado.textContent =
        "Sua missão terminou! Suas escolhas mostram que você pode usar a inteligência artificial de forma consciente, crítica e responsável.";
}

mostraPergunta();
```
