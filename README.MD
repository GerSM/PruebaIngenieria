# PRUEBA INGENIERIA 

## Instalación

## Paso 1

**### Forma 1**
Dar clic en Code y luego download Zip
**### Forma 2**
Crear una carpeta, ingresar a dicha carpeta desde git bash y ejecutar el comando 

`    git clone https://github.com/GerSM/PruebaIngenieria`

## Paso 2

Abrir la carpeta en el editor de codigo de tu preferencia y ejecutar el codigo en un servidor web, para observar los resultados en la consola de dicho navegador 


# Vista Previa

Codigo
![](./imgs/Code-Capture.png)

Servidor
![](./imgs/LiveServer-Capture.png)

------------


##  Problema
El sueldo de los jugadores del Resuelve FC se compone de dos partes un sueldo fijo y un bono variable, la suma de estas dos partes es el sueldo de un jugador. El bono variable se compone de dos partes meta de goles individual y meta de goles por equipo cada una tiene un peso de 50%.

Tu programa deberá hacer el cálculo del sueldo de los jugadores del Resuelve FC.

¿Cómo se calculan los alcances de meta y bonos?
La meta individual de goles por jugador depende del nivel que tenga asignado:

| Nivel  | Goles / mes  |
| ------------ | ------------ |
|  A | 5  |
|  B |  10 |
|  C | 15  |
|  D |  20 |

Ejemplo: Los jugadores Juan, Pedro, Martín y Luis anotaron así durante el mes:

| Jugador  | Nivel |  Goles anotados en el mes/Minimo requerido  |
| ------------ | ------------ |
| Juan | A  | 6/5  |
| Pedro | B  | 7/10  |
| Martín | C  | 16/15  |
| Luis  | Cuauh  | 19/20 |
| |Total | 48/50 |

En el bono por equipo tendrían un alcance de 96% Luis tendría un alcance individual de 95% para un alcance total de 95.5% El suelo fijo de Luis es de 50,000.00 y su bono es de 10,000.00 por lo que su sueldo final será $59,550.00

La prueba
Tu programa deberá recibir como input un JSON con esta estructura:

    {
       "jugadores" : [  
          {  
             "nombre":"Juan Perez",
             "nivel":"C",
             "goles":10,
             "sueldo":50000,
             "bono":25000,
             "sueldo_completo":null,
             "equipo":"rojo"
          },
          {  
             "nombre":"EL Cuauh",
             "nivel":"Cuauh",
             "goles":30,
             "sueldo":100000,
             "bono":30000,
             "sueldo_completo":null,
             "equipo":"azul"
          },
          {  
             "nombre":"Cosme Fulanito",
             "nivel":"A",
             "goles":7,
             "sueldo":20000,
             "bono":10000,
             "sueldo_completo":null,
             "equipo":"azul"
    
          },
          {  
             "nombre":"El Rulo",
             "nivel":"B",
             "goles":9,
             "sueldo":30000,
             "bono":15000,
             "sueldo_completo":null,
             "equipo":"rojo"
    
          }
       ]
    }
En la respuesta deberás llenar la llave sueldo_completo con el monto correcto de cada jugador.

    `{
       "jugadores": [
          {  
             "nombre":"El Rulo",
             "goles_minimos":10,
             "goles":9,
             "sueldo":30000,
             "bono":15000,
             "sueldo_completo": 14250,
             "equipo":"rojo"
          }
       ]
    }`