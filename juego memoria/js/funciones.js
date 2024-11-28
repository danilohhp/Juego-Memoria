// variables globales
const d = document;
let imgN1 = [
    {
        nombre: "real madrid", url: "imagenes/real madrid.png"
    },
    {
        nombre: "liverpool", url: "imagenes/liverpool.png"
    },
    {
        nombre: "psg", url: "imagenes/psg.png"
    },
    {
        nombre: "milan", url: "imagenes/milan.png"
    },
    {
        nombre: "boca", url: "imagenes/boca.png"
    },
    {
        nombre: "bayer", url: "imagenes/bayer.png"
    },
    {
        nombre: "chelsea", url: "imagenes/chelsea.png"
    },
    {
        nombre: "manchesterunited", url: "imagenes/manchesterunited.png"
    },
    {
        nombre: "real madrid", url: "imagenes/real madrid.png"
    },
    {
        nombre: "liverpool", url: "imagenes/liverpool.png"
    },
    {
        nombre: "psg", url: "imagenes/psg.png"
    },
    {
        nombre: "milan", url: "imagenes/milan.png"
    },
    {
        nombre: "boca", url: "imagenes/boca.png"
    },
    {
        nombre: "bayer", url: "imagenes/bayer.png"
    },
    {
        nombre: "chelsea", url: "imagenes/chelsea.png"
    },
    {
        nombre: "manchesterunited", url: "imagenes/manchesterunited.png"
    },
];
let imgN2 = [
    {
        nombre: "real madrid", url: "imagenes/real madrid.png"
    },
    {
        nombre: "liverpool", url: "imagenes/liverpool.png"
    },
    {
        nombre: "psg", url: "imagenes/psg.png"
    },
    {
        nombre: "milan", url: "imagenes/milan.png"
    },
    {
        nombre: "boca", url: "imagenes/boca.png"
    },
    {
        nombre: "bayer", url: "imagenes/bayer.png"
    },
    {
        nombre: "chelsea", url: "imagenes/chelsea.png"
    },
    {
        nombre: "manchesterunited", url: "imagenes/manchesterunited.png"
    },
    {
        nombre: "real madrid", url: "imagenes/real madrid.png"
    },
    {
        nombre: "liverpool", url: "imagenes/liverpool.png"
    },
    {
        nombre: "psg", url: "imagenes/psg.png"
    },
    {
        nombre: "milan", url: "imagenes/milan.png"
    },
    {
        nombre: "boca", url: "imagenes/boca.png"
    },
    {
        nombre: "bayer", url: "imagenes/bayer.png"
    },
    {
        nombre: "chelsea", url: "imagenes/chelsea.png"
    },
    {
        nombre: "manchesterunited", url: "imagenes/manchesterunited.png"
    },
    {
        nombre: "city", url: "imagenes/city.jpg"
    },
    {
        nombre: "city", url: "imagenes/city.jpg"   
    },
    {
        nombre: "nacional", url: "imagenes/nacional.png"
    },
    {
        nombre: "nacional", url: "imagenes/nacional.png" 
    }
];
let imgN3 = [
    {
        nombre: "real madrid", url: "imagenes/real madrid.png"
    },
    {
        nombre: "liverpool", url: "imagenes/liverpool.png"
    },
    {
        nombre: "psg", url: "imagenes/psg.png"
    },
    {
        nombre: "milan", url: "imagenes/milan.png"
    },
    {
        nombre: "boca", url: "imagenes/boca.png"
    },
    {
        nombre: "bayer", url: "imagenes/bayer.png"
    },
    {
        nombre: "chelsea", url: "imagenes/chelsea.png"
    },
    {
        nombre: "manchesterunited", url: "imagenes/manchesterunited.png"
    },
    {
        nombre: "real madrid", url: "imagenes/real madrid.png"
    },
    {
        nombre: "liverpool", url: "imagenes/liverpool.png"
    },
    {
        nombre: "psg", url: "imagenes/psg.png"
    },
    {
        nombre: "milan", url: "imagenes/milan.png"
    },
    {
        nombre: "boca", url: "imagenes/boca.png"
    },
    {
        nombre: "bayer", url: "imagenes/bayer.png"
    },
    {
        nombre: "chelsea", url: "imagenes/chelsea.png"
    },
    {
        nombre: "manchesterunited", url: "imagenes/manchesterunited.png"
    },
    {
        nombre: "city", url: "imagenes/city.jpg"
    },
    {
        nombre: "city", url: "imagenes/city.jpg"   
    },
    {
        nombre: "nacional", url: "imagenes/nacional.png"
    },
    {
        nombre: "nacional", url: "imagenes/nacional.png" 
    },
    {
        nombre: "arsenal", url: "imagenes/arsenal.png"
    },
    {
        nombre: "arsenal", url: "imagenes/arsenal.png"
    },
    {
        nombre: "barca", url: "imagenes/barca.jpg"
    },
    {
        nombre: "barca", url: "imagenes/barca.jpg"
    }
];
let nombreImg = []; // guardar nombres
let posImg = []; // guardar posiciones
let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = document.querySelector(".nivel");
let mostrarIntentos = document.querySelector(".intentos");
let mostrarAciertos = document.querySelector(".aciertos");
let mostrarTiempo = document.querySelector(".tiempo");
let tiempotrascurrido;
let btn_iniciar = document.querySelector(".btn-iniciar");
let imagenNivel;
let estoyjugando = false;
let sonidoSeleccionar = new Audio("./sonidos/seleccionar.mp3");
let sonidoperder = new Audio("./sonidos/perder.mp3");
let mostrarJugador = document.querySelector(".jugador")

//agregar boton para iniciar el juego
btn_iniciar.addEventListener("click",  function(){
    //comprobar que el juego esta activo
    if(estoyjugando == false && nivel == 1){
        ventanaModal()
        
    }else if(estoyjugando == false && nivel == 2){
        estoyjugando = true;
        nivel2();
    }
    else if(estoyjugando == false && nivel == 3){
        estoyjugando = true;
        nivel3();
    }
        
    });

    //alert("juego iniciado");
    
    

// controlar tiempo del juego

  

let tablero = d.querySelector(".tablero");

// poner las imagenes aleatorias
imgN1.sort(()=>Math.random()-0.5);


// funcion para agrgrar las imagenes

function agregarimagenes(){
    if(nivel == 1){
        imagenNivel = imgN1;
    }else if(nivel == 2){
        imagenNivel = imgN2;
    }else if(nivel == 3){
        imagenNivel = imgN3;
    }

    imagenNivel.forEach((img,i)=>{
        let div = d.createElement("div"); // crear etiqueta div
        div.className = "col-3" // agg al div la clase col-3
        let imagen = d.createElement("img"); // crear etiqueta de imagen
        imagen.className = "img-fluid altura-img";
        imagen.src = "imagenes/balon.png";
        imagen.id = i; // agg id a las imagenes 
        imagen.addEventListener("click" , mostrarimagenes);
        div.appendChild(imagen); // agg la imagen al div
        tablero.appendChild(div); // agg div al tablero

    });
}

// funcion para mostrar las imagenes ocultas
function mostrarimagenes(){
    sonidoSeleccionar.play();
    let imagenID = this.getAttribute("id");
    // mostar imagen 
    this.src = imagenNivel[imagenID].url; // cambiar las url de las imagenes
    nombreImg.push(imagenNivel[imagenID].nombre); // guardar nombres
    posImg.push(imagenID); // guardar posiciones 
    // alert("id de la imagen :"+imagenID);

    // validar si se muestran 2 imagenes
    if(nombreImg.length == 2){
        setTimeout(compararimagenes,300)
        //compararimagenes();
    }

}

// funcion para comparar las imagenes
function compararimagenes(){
   let imagenesTablero = document.querySelectorAll(".tablero .col-3 img");
     
    // validar si las imagenes se llaman igual
    if(nombreImg[0] == nombreImg[1]){
        if (posImg[0] != posImg[1]) {
            alert("¡¡Felicitaciones adivinaste!!");
        imagenesTablero[posImg[0]].src = "imagenes/check.png";
        imagenesTablero[posImg[1]].src = "imagenes/check.png";
        imagenesTablero[posImg[0]].removeEventListener("click", mostrarimagenes); 
        imagenesTablero[posImg[1]].removeEventListener("click", mostrarimagenes);  
       aciertos++;
       mostrarAciertos.textContent = aciertos;


        }else{
                //alert("Debes Escoger Otra Imagen");
                imagenesTablero[posImg[0]].src = "imagenes/balon.png";
             }
        }else{
            //alert("sigue intentando")
        imagenesTablero[posImg[0]].src = "imagenes/balon.png";
        imagenesTablero[posImg[1]].src = "imagenes/balon.png";
       intentos++;
       mostrarIntentos.textContent = intentos;
        }
        // reiniciar las variables
        nombreImg =[];
        posImg = [];

        // comprobar si se adivinaron todas las imagenes
        if(nivel == 1 && aciertos == 8){
            alert("¡¡Felicidades pasaste al sigueinte nivel!!");
            //location.reload();
            nivel++;
            mostrarNivel.textContent = nivel;
            intentos = 0;
            mostrarIntentos.textContent = intentos;
            aciertos = 0;
            mostrarIntentos.textContent = aciertos;
            clearInterval(tiempotrascurrido);
            tiempo = 50;
            mostrarTiempo.textContent = tiempo;
            estoyjugando = false;
            quitarimg();
        } else if(
            nivel == 2 && intentos == 10 ){
                alert("¡¡Felicidades pasaste al sigueinte nivel!!");
                nivel++;
                mostrarNivel.textContent = nivel;
                intentos = 0;
                mostrarIntentos.textContent = intentos;
                aciertos = 0;
                mostrarIntentos.textContent = aciertos;
                clearInterval(tiempotrascurrido);
                tiempo = 45;
                mostrarTiempo.textContent = tiempo;
                estoyjugando = false;
                quitarimg();
            }else if(nivel == 3 && intentos == 12){
                alert("¡ Felicidades ganaste el juego !");
                location.reload();
            }
        
}

function nivel1() {
    //agregar imagenes al tablero
    agregarimagenes();
    mostrarNivel.textContent = nivel;
    tiempoDejuego();
    }
    function nivel2() {
        //agregar imagenes al tablero
        agregarimagenes();
        mostrarNivel.textContent = nivel;
        tiempoDejuego();
    }   
    function nivel3() {
        //agregar imagenes al tablero
        agregarimagenes();
        mostrarNivel.textContent = nivel;
        tiempoDejuego();
    }     

function tiempoDejuego() {
    // controlar el tiempo del juego
    tiempotrascurrido = setInterval(()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 10){
            alert(" Rapido!! el tiempo se agoto perdiste :( :(");
            mostrarTiempo.style.color = "red";
            mostrarTiempo.style.fontSize = "20px";
            
        } else if(tiempo == 0){
            alert("El tiempo se agoto perdiste");
            sonidoperder.play();
            clearInterval(tiempotrascurrido);
            location.reload();
           

        }
    }, 1000);

    
}

function quitarimg() {
    let imagenquitar = document.querySelectorAll(".tablero div");
    imagenquitar.forEach((img)=>{
        img.remove();
    })
    
}

// mostrar ventana modal

function ventanaModal() {
    let mostrarModal = document.querySelector("#exampleModal");
    let cerrarmodal = document.querySelectorAll(".cerrar");
    let inputJugador = document.querySelector(".nombre-jugador");
    let btnJugador = document.querySelector(".registrar-jugador");

    cerrarmodal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style,display = "none";

        });
    });
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    btnJugador.addEventListener("click",()=>{
        //mostrar nombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //cerrar ventana modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
        //iniciar nivel 1
        estoyjugando = true;
        nivel1();

    });

}


