let indiceCor = 0;

function mostrarMensagem(nomeReceita) {

    alert("🍽️ Que legal! Você gostou da receita: " + nomeReceita);

    const ray = document.getElementById("ray");

    ray.classList.add("voando");

    setTimeout(() => {
        ray.classList.remove("voando");
    }, 5000);
}

function mudarCor() {

    const cores = [
        "#e8f5e9",
        "#c8e6c9",
        "#a5d6a7",
        "#81c784",
        "#dcedc8"
    ];

    indiceCor = (indiceCor + 1) % cores.length;

    document.body.style.backgroundColor = cores[indiceCor];
}

document.getElementById("btnMagia").addEventListener("click", mudarCor);