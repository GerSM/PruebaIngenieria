async function obtenerSueldos() {
  const response = await fetch("http://127.0.0.1:5555/jugadores.json");
  const json = await response.json();

  //For para sumar los goles de cada jugador y asignarlos a la variable sumaDeGolesDelEquipo
  for (let i = 0; i <= json.jugadores.length; i++) {
    let sumaDeGolesDelEquipo = 0;
    
    for (let j = 0; j < json.jugadores.length; j++) {
      sumaDeGolesDelEquipo += json.jugadores[j]?.goles;
    } //console.log(sumaDeGolesDelEquipo);

    
    
    //For para asignar los goles minimos de cada jugador y sumar el total de goles que debe tener el equipo
    let sumaGolesTotalesEquipo = 0;
    for(let k = 0; k < json.jugadores.length; k++){
        if (json.jugadores[k]?.nivel === "A"){
        json.jugadores[k].goles_minimos = 5;
    }
        else if (json.jugadores[k]?.nivel === "B"){
        json.jugadores[k].goles_minimos = 10;
    }
        else if (json.jugadores[k]?.nivel === "C"){
        json.jugadores[k].goles_minimos = 15;
    }
        else if (json.jugadores[k]?.nivel === "El Cuauh"){
        json.jugadores[k].goles_minimos = 20;
    }

        sumaGolesTotalesEquipo += json.jugadores[k].goles_minimos;
    }
    
    
    const nivel = json.jugadores[i]?.nivel;
    const goles = json.jugadores[i]?.goles;
    const sueldo = json.jugadores[i]?.sueldo;
    const bono = json.jugadores[i]?.bono;
    const golesMinimos = json.jugadores[i]?.goles_minimos;

    //Alcance de Jugador
    const alcanceJugador = (goles / golesMinimos);

    //Alcance del equipo
    const alcanceDelEquipo = (sumaDeGolesDelEquipo / sumaGolesTotalesEquipo);

    //Alcance total del jugador
    const alcanceTotaldeJugador = (alcanceJugador + alcanceDelEquipo) / 2;

    //calculando sueldo completo

    const sueldoCompleto = alcanceTotaldeJugador * bono

    if (json.jugadores[i]?.nivel === "A") {
      console.log(`El jugador ${json.jugadores[i].nombre} es nivel A`);
      
      console.log(alcanceTotaldeJugador);
      console.log(sumaDeGolesDelEquipo);
      console.log(sumaGolesTotalesEquipo);
      console.log(alcanceDelEquipo);
      json.jugadores[i].sueldo_completo = sueldoCompleto
      console.log(json.jugadores);
      console.log(nivel);
      console.log(bono);
    } else if (json.jugadores[i]?.nivel === "B") {
      console.log(`El jugador ${json.jugadores[i].nombre} es nivel B`);
      json.jugadores[i].goles_minimos = 10;
      console.log(sueldo);
      console.log(nivel);
    } else if (json.jugadores[i]?.nivel === "C") {
      console.log(`El jugador ${json.jugadores[i].nombre} es nivel C`);
      json.jugadores[i].goles_minimos = 15;
      console.log(sueldo);
      console.log(nivel);
    } else if (json.jugadores[i]?.nivel === "Cuauh") {
      console.log(`El jugador ${json.jugadores[i].nombre} es nivel Cuauh`);
      json.jugadores[i].goles_minimos = 20;
      console.log(sueldo);
      console.log(nivel);
    } 
  }
}

obtenerSueldos();
