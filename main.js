const boton = document.getElementById("boton")
const reset = document.getElementById("reset")
const htmlContador = document.getElementById("contador")
const htmlText = document.getElementById("texto")
const colores = ["red", "blue", "black", "yellow", "orange", "purple", "green", "magenta"]  

let cps = 0
let contador = 0
let tiempoRestante = 10
let timeoutId = null


htmlContador.innerHTML = `${contador} clicks`

boton.addEventListener('click', (e)=>{
    e.preventDefault()
    if (tiempoRestante === 10){
        contador += 1
        htmlContador.innerHTML = `${contador} clicks`
        actualizarTiempo()
    }else if (tiempoRestante >= 0){
        contador += 1
        htmlContador.innerHTML = `${contador} clicks`
    }
})

function actualizarTiempo() {
    htmlText.innerHTML = `Tiempo restante: ${tiempoRestante}`
    tiempoRestante -= 1

    if (tiempoRestante < 0) {
        boton.disabled = true
        cps = contador / 10
        htmlContador.innerHTML = `
        Hiciste ${contador} clicks, un total de: ${cps} clicks por segundo
        `
    } else {
        timeoutId = setTimeout(actualizarTiempo, 1000) 
    }
}

reset.addEventListener('dblclick', (e)=>{
    e.preventDefault()

    contador = 0
    tiempoRestante = 10
    boton.disabled = false
    htmlContador.innerHTML = `${contador} clicks`
    htmlText.innerHTML = `Tiempo restante: ${tiempoRestante}`
    clearTimeout(timeoutId)
})
