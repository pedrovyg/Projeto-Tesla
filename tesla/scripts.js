let Alerta = "Seu site de compras da Tesla"

alert(Alerta)
console.log(Alerta)

function alerta2() {
    console.log("Estou na FUNÇÃO")
}
alerta2()

// document = ir no HTML
// querySelector = Buscar o que eu quiser que ele busque

let formulario = document.querySelector(".formulario")

function aparecerFormulario(){
    formulario.style.left = "50%"
}

function desaparecerFormulario(){
formulario.style.left = "-50%"
}