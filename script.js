// const helados = [
//     {sabor: "frutilla", Precio: 1000,},
//     {sabor: "chocolate", Precio: 1000,},
//     {sabor: "limon", Precio: 1000,},
//     {sabor: "granizado", Precio: 1000,}
// ];

// let pregunta = prompt("¿Que helado buscas?");

// const buscar = helados.find(ice => ice.sabor === pregunta);
// let mensaje = `el helado de ${buscar.sabor} tiene un valor de ${buscar.Precio}$`;
// alert(mensaje);

// let preguntaCantidad = parseInt(prompt("Cuantos helados quieres comprar?"))
// let precioTotal = 1000 * preguntaCantidad;

// function cuotas() {
//     let precio = precioTotal
//     if (precio <= 3000) {
//         alert("Podes hacer el pago en 6 cuotas")
//         let preguntaCuotas = parseInt(prompt("En cuantas cuotas lo quieres pagar? Maximo 6"))
//         if (preguntaCuotas > 6) {
//             alert("El maximo es de 6 cuotas, selecciona un numero valido.")
//         } else if (preguntaCuotas < 0) {
//             alert("Ese numero no es valido, selecciona otro")
//         } else {
//             let valorTotal = precio / preguntaCuotas
//             alert(`Has seleccionado el numero de ${preguntaCuotas} cuotas, el valor total es ${valorTotal}`)
//         }
//     } else if (precio >= 5000) {
//         alert("Podes hacer el pago en 12 cuotas")
//         let preguntaCuotas = parseInt(prompt("En cuantas cuotas lo quieres pagar? Maximo 12"))
//         if (preguntaCuotas > 12) {
//             alert("El maximo es de 12 cuotas, selecciona un numero valido.")
//         } else if (preguntaCuotas < 0) {
//             alert("Ese numero no es valido, selecciona otro")
//         } else {
//             let valorTotal = precio / preguntaCuotas
//             alert(`Has seleccionado el numero de ${preguntaCuotas} cuotas, el valor total es ${valorTotal}`)
//         }
//     }
// }
// cuotas()

// let preguntaSaldo = prompt("Cuanto dinero tienes?")
// let frutilla = 500
// let limon = 500
// let bombon = 600
// let chocolate = 500
// let boton1 = document.getElementById("button1")
// let boton2 = document.getElementById("button2")
// let boton3 = document.getElementById("button3")
// let boton4 = document.getElementById("button4")

// boton1.addEventListener("click", funcion1)
// boton2.addEventListener("click", funcion2)
// boton3.addEventListener("click", funcion3)
// boton4.addEventListener("click", funcion4)

// function funcion1() {
// let calculo = preguntaSaldo - frutilla;
// if (calculo < 0) {
//     alert("No tenes suficiente dinero para comprarte ese helado, selecciona otro")
// }
// alert(`El monto que te sobra es ${calculo}`)
// }

// function funcion2() {
//     let calculo = preguntaSaldo - limon;
//     if (calculo < 0) {
//         alert("No tenes suficiente dinero para comprarte ese helado, selecciona otro")
//     }
//     alert(`El monto que te sobra es ${calculo}`)
// }

// function funcion3() {
//     let calculo = preguntaSaldo - bombon;
//     if (calculo < 0) {
//         alert("No tenes suficiente dinero para comprarte ese helado, selecciona otro")
//     }
//     alert(`El monto que te sobra es ${calculo}`)
// }

// function funcion4() {
//     let calculo = preguntaSaldo - chocolate;
//     if (calculo < 0) {
//         alert("No tenes suficiente dinero para comprarte ese helado, selecciona otro")
//     }
//     alert(`El monto que te sobra es ${calculo}`)
// }

let boton1 = document.getElementById("button1");
let boton2 = document.getElementById("button2");
let boton3 = document.getElementById("button3");
let boton4 = document.getElementById("button4");
let dinero = document.getElementById("input");
let dineroSubmit = document.getElementById("submitMoney");
let divcash = document.getElementById("div-cash")
let frutilla = 300;
let combinado = 450;
let granizado = 600;
let chocolate = 350;


dineroSubmit.addEventListener("click", submitDinero);
boton1.addEventListener("click", eventoBoton1);
boton2.addEventListener("click", eventoBoton2);
boton3.addEventListener("click", eventoBoton3);
boton4.addEventListener("click", eventoBoton4);


function submitDinero() {
  let plata = dinero.value;
}

function eventoBoton1() {
  let resto = dinero.value - frutilla;
  if (resto < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tienes dinero',
    })
  } else {
    dinero = resto;
    Swal.fire({
      icon: 'success',
      title: 'Hurra!',
      text: 'Pudiste comprarlo',
    });
    divcash.innerHTML = `El monto que te sobra es de ${dinero}`
  }
  sessionStorage.setItem("Frutilla", "Has seleccionado frutilla");
}

function eventoBoton2() {
  let resto = dinero.value - combinado;
  if (resto < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tienes dinero',
    })
  } else {
    dinero = resto;
    Swal.fire({
      icon: 'success',
      title: 'Hurra!',
      text: 'Pudiste comprarlo',
    });
    divcash.innerHTML = `El monto que te sobra es de ${dinero}`
  }
  sessionStorage.setItem("Combinado", "Has seleccionado combinado");
}

function eventoBoton3() {
  let resto = dinero.value - granizado;
  if (resto < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tienes dinero',
    })
  } else {
    dinero = resto;
    Swal.fire({
      icon: 'success',
      title: 'Hurra!',
      text: 'Pudiste comprarlo',
    });
    divcash.innerHTML = `El monto que te sobra es de ${dinero}`
  }
  sessionStorage.setItem("Granizado", "Has seleccionado granizado");
}

function eventoBoton4() {
  let resto = dinero.value - chocolate;
  if (resto < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tienes dinero',
    })
  } else {
    dinero = resto;
    Swal.fire({
      icon: 'success',
      title: 'Hurra!',
      text: 'Pudiste comprarlo',
    });
    divcash.innerHTML = `El monto que te sobra es de ${dinero}`
  }
  sessionStorage.setItem("Chocolate", "Has seleccionado chocolate");
  
}
