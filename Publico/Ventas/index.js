// input valor significativo
const Nombre = document.querySelector("#Nombre")

const Costo = document.querySelector("#Costo")

const Cantidad = document.querySelector("#Cantidad")
const Precio = document.querySelector("#Precio")
const Imagen = document.querySelector("#Imagen")
// demas elementos
const form = document.querySelector("#form")
const contenedor2 = document.querySelector("#contenedor2");
const botonMenu = document.querySelector("#boton-menu");
const datos1 = document.querySelector("#datos1");
const HomeBtn = document.querySelector("#Home-btn");
const RegistroBtn = document.querySelector("#Registro-btn");
const MensajeBtn = document.querySelector("#mensaje-btn");
const boton = document.querySelector("#boton");
const datos = document.querySelector("#datos");
const configDelete = document.querySelector("#config-delete");
const ProductosBtn = document.querySelector("#producto-btn");
// Boton de informacion

const ConfiguracionBtn = document.querySelector("#config-btn");

// Obtener la fecha 




       

          // menu desplegable 
         
          botonMenu.addEventListener("click" , e => {
 
            const menuDesplegable = document.querySelector("#menu-desplegable")
            const container2 = document.querySelector("#menu-desplegable")
            if ( container2.classList.contains("visible") ===true) {
                container2.classList.remove("visible")
                console.log(menuDesplegable)
            }else {  console.log("hdd")
                container2.classList.add("visible")}
            
            })
        
// Menu despegable 

HomeBtn.addEventListener("click", e => {
    window.location.pathname = "/Casa"

})
RegistroBtn.addEventListener("click", e => {
    window.location.pathname = "/Inventario"

})

ProductosBtn.addEventListener("click", e => {
    window.location.pathname = "/Productos"

})

MensajeBtn.addEventListener("click", e => {
  window.location.pathname = "/Ventas"

})

ConfiguracionBtn.addEventListener("click", e => {
    window.location.pathname = "/Configuracion"

})
      
            

            