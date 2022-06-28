const sel = document.querySelector(".data")
const error = [document.querySelectorAll(".error")]
const response = document.getElementById('response')


data = (val)=>{
    val = parseInt(val)
    sel.value = val
    console.log(val)
    console.log(sel)
}

tramitar = ()=>{
    const moneda = document.getElementById("moneda").value
    let cantidad = document.getElementById("cantidad")
    if (typeof eval(cantidad.value) == 'number'){
        console.log("Ingreso")
        console.log(typeof parseInt(cantidad.value))
    } else {
        cantidad.setAttribute("style","border: 1px solid #c51f1f;")
        error[0][0].removeAttribute("hidden")
        console.log("error")
        console.log(typeof cantidad.value)
    }

    if (sel.value == 1){
        let cantidad = document.getElementById("cantidad").value
        cantidad = parseInt(cantidad)
        let intAnual = (cantidad*50)/ 100
        let intMens = intAnual / 12
        let totalPagar = intAnual + cantidad
        console.log(`El Total a pagar por el prestamo es: ${totalPagar}${moneda}`)
        response.innerHTML = `<h1>Cantidad Digitada ${cantidad}${moneda}</h1>
        <p>El total a pagar por el prestamo: <b>${totalPagar}${moneda}</b> <br>
          El total Anual de interes por mes: <b>${intAnual}${moneda}</b> <br>
          -------------------------------
           |...Gracias por preferir FCCR...|
            -------------------------------`
    } 
    else if (sel.value == 2){
        let cantidad = document.getElementById("cantidad").value
        cantidad = parseInt(cantidad)
        let intAnual = (cantidad*.8)/ 100
        let intMens = intAnual / 12
        let totalPagar = intAnual + cantidad
        console.log(`El Total a pagar por el prestamo es: ${totalPagar}${moneda}`)
        response.innerHTML = `<h1>Cantidad Digitada ${cantidad}${moneda}</h1>
        <p>El total a pagar por el prestamo: <b>${totalPagar}${moneda}</b> <br>
          El total Anual de interes por mes: <b>${intAnual}${moneda}</b> <br>
          -------------------------------
           |...Gracias por preferir FCCR...|
            -------------------------------` 
    }
    else if (sel.value == 3){
        let cantidad = document.getElementById("cantidad").value
        cantidad = parseInt(cantidad)
        let intAnual = (cantidad*120)/ 100
        let intMens = intAnual / 12
        let totalPagar = intAnual + cantidad
        response.in
        console.log(`El Total a pagar por el prestamo es: ${totalPagar}${moneda}`)
        response.innerHTML = `<h1>Cantidad Digitada ${cantidad}${moneda}</h1>
        <p>El total a pagar por el prestamo: <b>${totalPagar}${moneda}</b> <br>
          El total Anual de interes por mes: <b>${intAnual}${moneda}</b> <br>
          -------------------------------
           |...Gracias por preferir FCCR...|
            -------------------------------` 
    } else {
        incorrect = [document.querySelectorAll(".botons1")]
        incorrect[0][1].setAttribute("style","border: 1px solid #c51f1f;")
        incorrect[0][0].setAttribute("style","border: 1px solid #c51f1f;")
        incorrect[0][2].setAttribute("style","border: 1px solid #c51f1f;")
        error[0][1].removeAttribute("hidden")
        
    }
}