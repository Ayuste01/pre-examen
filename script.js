// EJERCICIO
// let btn = document.querySelector(".btn")
// let btnrm = document.querySelector(".btnrm")
// let contenido = document.querySelector(".contenido")
// btn.addEventListener("click", function(){
//     console.log("Has clickeado el botón")
//     contenido.innerHTML = "Texto desde JS"
//     contenido.classList.add("divContenido")
// })
// btnrm.addEventListener("click", function(){
//     contenido.innerHTML = ""
//     contenido.classList.remove("divContenido")
// })

// EJERCICIO
// let btn = document.querySelector("#btnInsertar").addEventListener("click", insertarAlumno);
//  function insertarAlumno() {
//             let nombre = document.querySelector("#nombre").value;
//             let grupo = document.querySelector("#grupo").value;
//             let foto = document.querySelector("#foto").value;
//             document.querySelector("#divAlumnos").innerHTML = nombre + " - " + grupo + "<br> <img src='" + foto + "' width='200' height='200'>";
//             // con las comillas "" abres todo en general, creas la etiqueta normal hasta donde se inserta la imagen. donde se inserta la imagen se abre con ' y cerramos el string con ""
//             // sumamos la variable foto (+ foto + ) y volvemos a abrir un string con " y seguimos la etiqueta width y height usando ' para despues cerrar todo el string de nuevo con "
//         }

// EJERCICIO

const guitarras = [
  {
    id: 1,
    marca: "Fender",
    modelo: "Stratocaster",
    tipo: "Eléctrica",
    precio: 1200,
  },
  {
    id: 2,
    marca: "Gibson",
    modelo: "Les Paul",
    tipo: "Eléctrica",
    precio: 1800,
  },
  {
    id: 3,
    marca: "Yamaha",
    modelo: "FG800",
    tipo: "Acústica",
    precio: 250,
  },
  {
    id: 4,
    marca: "Fender",
    modelo: "Telecaster",
    tipo: "Eléctrica",
    precio: 1200,
  },
    {
    id: 5,
    marca: "Yamaha",
    modelo: "1234",
    tipo: "Eléctrica",
    precio: 1800,
  },
  {
    id: 6,
    marca: "Lion",
    modelo: "prueba array",
    tipo: "Acustica",
    precio: 500,
  },
];

let largo = guitarras.length;
console.log(largo);

function pintarGuitarra() {
    let html = "";

    for (let i = 0; i < guitarras.length; i++) {
        html += `
          <div class="card">
            <h3>${guitarras[i].marca} ${guitarras[i].modelo} </h3>
            <p> Tipo: ${guitarras[i].tipo} </p>
            <p style="font-weight:700;"> Precio: ${guitarras[i].precio} </p>
          </div>
        `;
    }

    document.getElementById("contenedor-guitarras").innerHTML = html;
}
pintarGuitarra();
// i es la posición, pero guitarras[i] es el contenido