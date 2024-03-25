//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
    primero: document.getElementById("primero"),
    segundo: document.getElementById("segundo"),
    tercero: document.getElementById("tercero"),
    cuarto: document.getElementById("cuarto"),
    cero: document.getElementById("0"),
    uno: document.getElementById("1"),
    dos: document.getElementById("2"),
    tres: document.getElementById("3"),
    cuatro: document.getElementById("4"),
    cinco: document.getElementById("5"),
    seis: document.getElementById("6"),
    siete: document.getElementById("7"),
    ocho: document.getElementById("8"),
    nueve: document.getElementById("9"),
}

console.log("Ejecutando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada


primero = Math.floor(Math.random()*10); 
segundo = Math.floor(Math.random()*10); 
tercero = Math.floor(Math.random()*10); 
cuarto = Math.floor(Math.random()*10); 



//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Empieza el tiempo!");
    crono.start();

}  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
    gui.primero.textContent = '*';
    primero = null;
    gui.segundo.textContent = '*';
    segundo = null;
    gui.tercero.textContent = '*';
    tercero = null;
    gui.cuarto.textContent = '*';
    cuarto = null;
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Vuelves a jugar!");
    crono.reset();
    primero = Math.floor(Math.random()*10);
    segundo = Math.floor(Math.random()*10); 
    tercero = Math.floor(Math.random()*10); 
    cuarto = Math.floor(Math.random()*10); 
    gui.primero.textContent = '*';
    gui.segundo.textContent = '*';
    gui.tercero.textContent = '*';
    gui.cuarto.textContent = '*';
}

// Pulsando cualquiera de los dígitos del 0 al 9 de la pantalla
gui.cero.onclick = () => {
    crono.start();
    if (primero == 0) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 0) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 0) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 0) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay ceros en la clave sercreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }

}
gui.uno.onclick = () => {
    crono.start();
    if (primero == 1) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 1) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 1) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 1) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay unos en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }   
}

gui.dos.onclick = () => {
    crono.start();
    if (primero == 2) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 2) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 2) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 2) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay dos en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}


gui.tres.onclick = () => {
    crono.start();;
    if (primero == 3) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 3) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 3) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 3) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay tres en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}

gui.cuatro.onclick = () => {
    crono.start();
    if (primero == 4) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 4) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 4) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 4) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay cuatros en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}


gui.cinco.onclick = () => {
    crono.start();
    if (primero == 5) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 5) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 5) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 5) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay cincos en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}

gui.seis.onclick = () => { 
    crono.start();
    if (primero == 6) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 6) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 6) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 6) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay seis en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}


gui.siete.onclick = () => {
    crono.start(); 
    if (primero == 7) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 7) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 7) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 7) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay sietes en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}

gui.ocho.onclick = () => {
    crono.start(); 
    if (primero == 8) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 8) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 8) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 8) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay ochos en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}


gui.nueve.onclick = () => {
    crono.start(); 
    if (primero == 9) { 
        gui.primero.textContent = primero;
        gui.primero.style.color = "green";
    }
    if (segundo == 9) { 
        gui.segundo.textContent = segundo;
        gui.segundo.style.color = "green";
    }
    if (tercero == 9) { 
        gui.tercero.textContent = tercero;
        gui.tercero.style.color = "green";
    }
    if (cuarto == 9) { 
        gui.cuarto.textContent = cuarto;
        gui.cuarto.style.color = "green";
    }
    else {
        console.log("No hay nueves en la clave secreta")
    }
    if (gui.primero.textContent != '*' && gui.segundo.textContent != '*' && gui.tercero.textContent != '*' && gui.cuarto.textContent != '*') {
        console.log("Has GANADOOO!!")
        crono.stop()
    }
}
