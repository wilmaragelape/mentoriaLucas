let inputs = document.querySelectorAll('input');
let button = document.querySelector('#irCarrinho');
let sectionFilms = document.querySelector('#films');
let sectionCarrinho = document.querySelector('#carrinho');
let contadorSpan = document.getElementById('contadorSpan');
let contadorCarrinho = document.getElementById('contadorCarrinho');
let selecionados = []


let nomeFilms = ['BATTLEFIELD', 'COLD WAR', 'DARK SOULS', 'RESIDENT EVIL 3', 'GOD OF WAR RAGNAROK', 'HORIZON']

let contador = 0;

for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('click', function () {
        if (inputs[i].checked) {
            contador += 1
            contadorSpan.innerText = contador
            contadorCarrinho.innerText = contador
            selecionados.push(i + 1)
            console.log(selecionados)

        }

        else {
            contador -= 1
            contadorSpan.innerText = contador
            contadorCarrinho.innerText = contador
            selecionados = selecionados.filter((valores) => {
                return valores != i + 1
            })
            console.log(selecionados)
        }
    })

}

button.addEventListener('click', function () {
    sectionFilms.style.display = "none"

    for (let i = 0; i < selecionados.length; i++) {
        let div = document.createElement("div")
        div.innerHTML = `  
        <div class="filmCarrinho">
            <img src="./images/Film${selecionados[i]}.png" alt="">
            <div>
                <span> ${nomeFilms[selecionados[i] - 1]} </span>

                <div class="propPrecos">
                    <span>Valor: R$ 10,00 </span>
                    <span>Quantidade: <span class="quantFilm"> 1 </span> </span>

                    <div class="propButtons">
                        <button id="botaoMais" onClick="somarPreco">+</button>
                        <button id="botaoMenos" onClick="diminuirPreco">-</button>
                    </div>
                </div>
            </div>
        </div>
    `
    sectionCarrinho.append(div)

    }
}
)

function somarPreco () {
    let quantFilm = document.querySelector ('.quantFilm')
    

}




