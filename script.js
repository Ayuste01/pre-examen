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

let btn = document.querySelector("#btnInsertar").addEventListener("click", insertarAlumno);
 function insertarAlumno() {
            let nombre = document.querySelector("#nombre").value;
            let grupo = document.querySelector("#grupo").value;
            document.querySelector("#divAlumnos").textContent = nombre + " - " + grupo;
        }