let nombre = prompt("Hola usuario ingrese su nombre y apellido ✍ ?") //Le Asignamos un nombre a nuestra variable
let coste = 0; // le asigno el valor 0 a la variable 
let numeroNochesHotel, ciudadPaisDestino, diasRentarAuto;

function saludar() //Saludamos
{
    alert("Hola! " + nombre + " Vamos a calcular el presupuesto de tu próximo viaje ✈🧳");
}

function estadia(){ //Preguntamos sobre el numero de noches que desea reservar
    numeroNochesHotel = prompt("Ingresar número de noches 🛏 siendo 4 el mínimo de noches y 8 el máximo ");
    // Evaluamos los casos 
    switch(numeroNochesHotel){
        case "4":
            alert("Tu número de noches 🛏 son 4 noches a 360$ + Iva incluido");
            coste += 360; // le asignamos un coste a cada caso para sumarle a nuestra variable coste : 0 ;
            break;
        case "5":
            alert("Tu número de noches 🛏 son 5 noches a 470$ + Iva incluido");
            coste += 470;
            break;
        case "6":
            alert("Tu número de noches 🛏 son 6 noches a 558$ + Iva incluido");
            coste += 558;
            break;
        case "7":
            alert("Tu número de noches 🛏 son 7 noches a 652$ + Iva incluido");
            coste += 652;
            break;
        case "8":
            alert("Tu número de noches 🛏 son 8 noches a 750$ + Iva incluido");
            coste += 750;
            break;
        default :
                alert("Tu número de noches 🛏 no es válido ❌"); 
                break     
                    
    } 
    console.log(numeroNochesHotel) //Consologeamos Nuestro resultado
    
}

function vuelos(){ // Pedimos al usuario asiganr el pais a visitar
    ciudadPaisDestino = prompt("Ingresa una ciudad de las siguientes en la lista: Venezuela, Paris, Argentina, Suiza");
    // evaluamos los casos 
    switch(ciudadPaisDestino){
        case "Venezuela":
            alert("Tu vuelo a Venezuela 🇻🇪🇪 son 120$ + Iva Disponible para el dia 12 de Marzo a las 04:00hrs");
            coste += 120;
            break;
        case "Paris":
            alert("Tu vuelo a Paris 🇻🇫🇷 son 370$ + Iva Disponible para el dia 14 a las 19:00hrs");
            coste += 370;
            break;
        case "Argentina":
            alert("Tu vuelo a Argentina 🇻🇫🇦🇷 son 110$ + Iva Disponible para el dia 10 de Marzo a las 06:00hrs");
            coste += 110;
            break;
        case "Suiza":
            alert("Tu vuelo a Suiza 🇨🇭 son 320$ + Iva Disponible para el dia 08 de Marzo a las 14:00hrs");
            coste += 320;
            break;
        default: 
            alert("No hay vuelos disponibles para esa ciudad hasta el momento ❌");
    } 
    
    console.log(ciudadPaisDestino)//Consologeamos Nuestro resultado
}

function Coche(){// Pedimos al usuario asiganr el numero de dias a rentar el Auto. 
    diasRentarAuto = prompt("Ingresa los dias que alquilarás un coche. min 5 a 8 días max 🚗");
    switch(diasRentarAuto){
        case "5":
            alert("El coste de alquiler de Auto 5 días es de 400$ + Iva Disponible Mercedez Benz 2023");
            coste += 400;
            break;
        case "6":
            alert("El coste de alquiler de Auto 6 días es de 450$ + Iva Disponible Malibu 2024");
            coste += 450;
            break;
        case "7":
            alert("El coste de alquiler de coche 7 días es de 500$ + Iva Disponible Mustang 2015");
            coste += 500;
            break;
        case "8":
            alert("El coste de alquiler de Auto 8 días es de 550$ + Iva Disponible Tundra Toyota 2020");
            coste += 550;
            break;
        case "0":
            alert("Sin alquiler de automovil para tu viaje . coste : 0$");
            break;
            default:
                alert("No hay Coches disponibles para ese dia ❌ ");
                
    }
    console.log(diasRentarAuto) //Consologeamos Nuestro resultado
}

function resultado(){ // IMPORTANTE: tanto numero de noches y dias a rentar el auto los convertimos a number 
    let cantNochesHotel = parseInt(numeroNochesHotel);
    let cantDiasCoche   = parseInt(diasRentarAuto);

    alert("Noches de hotel 🛏 : " + cantNochesHotel + " Noches , \nCiudad de destino📍: " + ciudadPaisDestino + "  \nDías de coche alquilados 🚗 : " + cantDiasCoche + " Dias");
    alert("Tu presupuesto final de tu viaje seria de: " + coste + "💴💲 Que tengas un excelente viaje " + nombre + " ✈👏🏼"); //Realizamos la suma de nuestroas variables para asignarle el valor de nuestro viaje en total. 
}

function Ejecucion() //invocamos nuestras Funciones
{
    saludar();
    estadia();
    vuelos();
    Coche();
    resultado();
}

Ejecucion(); //Aqui Ejecutamos 

