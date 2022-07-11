const jugadores = [
  {
    nombre: "Juan Perez",
    nivel: "C",
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: "rojo",
  },
  {
    nombre: "EL Cuauh",
    nivel: "tor",
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: "azul",
  },
  ,
  {
    nombre: "Cosme Fulanito",
    nivel: "A",
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: null,
    equipo: "azul",
  },
  {
    nombre: "El Rulo",
    nivel: "B",
    goles: 9,
    sueldo: 30000,
    bono: 15000,
    sueldo_completo: null,
    equipo: "rojo",
  },
];

for (let i = 0; i <= jugadores.length; i++) {
  if (jugadores[i].nivel === "A") {
    console.log(`El jugador ${jugadores[i].name} Es nivel A`);
  } else if (jugadores[i].nivel === "B") {
    console.log(`El jugador ${jugadores[i].name} Es nivel B`);
  } else if (jugadores[i].nivel === "C") {
    console.log(`El jugador ${jugadores[i].name} Es nivel C`);
  } else if (jugadores[i].nivel === "Cuauh") {
    console.log(`El jugador ${jugadores[i].name} Es nivel Cuauh`);
  } else {
    console.log("Ese nivel no existe");
  }
}
