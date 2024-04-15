class Crono {

    constructor(display) {
        this.display = display;
        //-- Tiempo
        this.cent = 0, //-- Centésimas
        this.seg = 0,  //-- Segundos
        this.min = 0,  //-- Minutos
        this.timer = 0;  //-- Temporizador asociado
        this.primero = 0; //-- Primer dígito
        this.segundo = 0; //-- Segundo dígito
        this.tercero = 0; //-- Tercer dígito
        this.cuarto = 0; //-- Cuarto Dígito
    }
    
    //-- Método que se ejecuta cada centésima
    tic() {
        //-- Incrementar en una centesima
        this.cent += 1;

        //-- 100 centésimas hacen 1 segundo
        if (this.cent == 100) {
        this.seg += 1;
        this.cent = 0;
        }

        //-- 60 segundos hacen un minuto
        if (this.seg == 60) {
        this.min = 1;
        this.seg = 0;
        }

        //-- Mostrar el valor actual
        this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent    
    }


    //-- Arrancar el cronómetro
    start() {
       if (!this.timer) {
          //-- Lanzar el temporizador para que llame 
          //-- al método tic cada 10ms (una centésima)
          this.timer = setInterval( () => {
              this.tic();
          }, 10);

        }
    }

    //-- Parar el cronómetro
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

    }

    //-- Reset del cronómetro
    reset() {
        this.cent = 0;
        this.seg = 0;
        this.min = 0;
        this.display.innerHTML = "0:0:0";
    }
}

//-- Elementos del DOM
const canvas = document.getElementById("ctiro");

//-- Acceder al deslizador de ángulo
const angulo = document.getElementById("angle");
const angulo_dsp = document.getElementById("angle_disp");

//-- Acceder al deslizador de velocidad
const velocidad = document.getElementById("velocidad");
const velocidad_dsp = document.getElementById("velocidad_dsp");

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de iniciar
const btnIniciar = document.getElementById("btnIniciar");

//-- Sonidos
//-- Crear los elementos de sonido
const rebote_sound = new Audio('rebote.mp3');

canvas.width = 800;
canvas.height = 400;

//-- Obtener el contexto del canvas 2d
const ctx = canvas.getContext("2d");


//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 340;
let xp = xop;
let yp = yop;

//-- Coordenadas iniciales del objetivo

let xomin = 0;
let xomax = 770;
let xomin_y = 0;
let xomax_y = 450;

let xo = xomin + (Math.random() * ((xomax - xomin) + 1));
let yo = xomin_y + (Math.random() * ((xomax_y - xomin_y) + 1));

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

//-- Dibujbar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Velocidad del proyectil
let velpx = 1;
let velpy = 1;


//-- Aceleración debida a la gravedad
const g = 9.8; //-- Modificar según sea necesario


//-- Tiempo inicial
let t = 1;

//-- Evento input del deslizador de ángulo
angulo.oninput = () => {
    angulo_dsp.innerHTML = angulo.value;

    //-- Convertir el valor del deslizador a radianes 
    angle = angulo.value * Math.PI / 180;
}

velocidad.oninput = () => {
    velocidad_dsp.innerHTML = velocidad.value;

    //-- Transforma la velocidad del proyectil
    velpx = parseInt(velocidad.value) * Math.cos(angle); 
    velpy = -parseInt(velocidad.value) * Math.sin(angle); 

}
//-- Función principal de actualización
function lanzar() 
{

  //-- Implementación del algoritmo de animación:
    //-- Actualizar la posición del proyectil (con el movimiento parabólico)
    xp = xop + velpx * t;
    yp = yop - (velpy * t - 0.5 * g * (t**2));

    //-- Incrementar el tiempo para el próximo cuadro
    t += 1;


    //-- 1) Actualizar posición de los elementos
    
    //-- Condición de choque
    if (xp < 0 || xp >= canvas.width || yp < 0 || yp >= canvas.height) {
        crono.stop();
        console.log("¡Fallaste! ");
        return; // Detener la animación si el proyectil sale del canvas sin alcanzar al objetivo
      }

      if (xp >= xo && xp <= xo + 50 && yp >= yo && yp <= yo + 50) {
        dibujarP(xp, yp, 50, 50, "yellow"); //-- Pintar el proyectil
        crono.stop();
        console.log("¡Acertaste!");
        return; //-- Si el proyectil colisiona con el objetivo, detener animación
      }

    //-- Condición de rebote en extremos verticales del canvas
    if (xp < 0 || xp >= (canvas.width - 25) ) {
        bound_sound();
        velpx = -velpx;
    }

    //-- Condición de rebote en extremos horizontales del canvas
    if (yp <= 0 || yp > canvas.height - 25 ) {
        bound_sound();
        velpy = -velpy;
    }

    //-- Colisión
    if (xp - xo < 10 ) {
        dibujarP(xp, yp, 50, 50, "yellow"); // Pintar el proyectil
    } 

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarP(xp, yp, 50, 50, "red"); // Pintar el proyectil
  dibujarO(xo,yo); // Pintar el objetivo

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

function bound_sound() {

    rebote_sound.currentTime = 0;
    rebote_sound.play();
}

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}

//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}

const gui = { display : document.getElementById("display")}
const crono = new Crono(gui.display);


//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    lanzar();
    crono.start();
}


//-- Función de retrollamada del botón de inicio
btnIniciar.onclick = () => {

    //-- Reinicio
    location.reload();

    //-- Dibujar el proyectil
    dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil
}
function update()
{
 
  requestAnimationFrame(update);
}

update();
