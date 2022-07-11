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
    for (let k = 0; k < json.jugadores.length; k++) {
      if (json.jugadores[k]?.nivel === "A") {
        json.jugadores[k].goles_minimos = 5;
      } else if (json.jugadores[k]?.nivel === "B") {
        json.jugadores[k].goles_minimos = 10;
      } else if (json.jugadores[k]?.nivel === "C") {
        json.jugadores[k].goles_minimos = 15;
      } else if (json.jugadores[k]?.nivel === "Cuauh") {
        json.jugadores[k].goles_minimos = 20;
      }

      sumaGolesTotalesEquipo += json.jugadores[k].goles_minimos;
    }

    const goles = json.jugadores[i]?.goles;
    const sueldo = json.jugadores[i]?.sueldo;
    const bono = json.jugadores[i]?.bono;
    const golesMinimos = json.jugadores[i]?.goles_minimos;

    //Alcance de Jugador
    const alcanceJugador = goles / golesMinimos;

    //Alcance del equipo
    const alcanceDelEquipo = sumaDeGolesDelEquipo / sumaGolesTotalesEquipo;

    //Alcance total del jugador
    const alcanceTotaldeJugador = (alcanceJugador + alcanceDelEquipo) / 2;

    //calculando sueldo completo
    const sueldoCompleto = Math.trunc(alcanceTotaldeJugador + bono);
    //Cabe recalcar que la llave sueldo_completo no es el sueldo completo del jugador, si no solo el calculo del bono que le toca, Agrego la llave sueldo_con_bono para calcular el sueldo completo

    const sueldoBono = sueldoCompleto + sueldo;

    //Agregando las llaves a los objetos 
    if (json.jugadores[i]?.nivel === "A") {
      json.jugadores[i].sueldo_completo = sueldoCompleto;
      json.jugadores[i].sueldo_con_bono = sueldoBono;
      console.log(json.jugadores);
    } else if (json.jugadores[i]?.nivel === "B") {
      json.jugadores[i].sueldo_completo = sueldoCompleto;
      json.jugadores[i].sueldo_con_bono = sueldoBono;
    } else if (json.jugadores[i]?.nivel === "C") {
      json.jugadores[i].sueldo_completo = sueldoCompleto;
      json.jugadores[i].sueldo_con_bono = sueldoBono;
    } else if (json.jugadores[i]?.nivel === "Cuauh") {
      json.jugadores[i].sueldo_completo = sueldoCompleto;
      json.jugadores[i].sueldo_con_bono = sueldoBono;
    }
  }
}

obtenerSueldos();
