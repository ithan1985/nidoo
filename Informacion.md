# Versión 1 Uso Parqueadero - Diagrama de Estados
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_informacion_sp1.jpg)

En el flujo de información para la búsqueda de parqueaderos la describimos mediante un modelo de estados. Los parqueaderos inician en estado disponible, luego el usuario inicia la búsqueda de parqueaderos y si no encuentra parqueaderos disponibles que coincidan con los criterios de búsqueda el flujo termina. Pero si al menos un parqueadero cumple con los parámetros de búsqueda el usuario lo reserva y el parqueadero se mueve al estado reservado.

Cuando el vehículo entra al parqueadero y el operario informa al sistema del ingreso del vehículo se inicia el uso del parqueadero. Desde este comento se comienzan a contabilizar los minutos de uso del parqueadero, el usuario regresa por su vehículo tiempo después y el operario da la salida del vehículo. En este momento se inicia la generación de la factura el cual es nuestro ASR mas significativo para la latencia y la escalabilidad. 



# Versión 2 Uso Parqueadero - Diagrama de Estados
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_informacion_sp2.jpg)

En las revisiones realizadas en conjunto se determino que el flujo no se alteraba pero si se debían incorporar las restricciones y criterios de aceptación para que el ASR de facturación cumpliera con lo solicitado por el cliente desde dos puntos de vistas:

* Latencia menos a 5 segundos al generar una factura.
* Escalabilidad con cargas transitorias que en donde se asume un aumento en la carga inicial de 100 peticiones por segundo durante 5 minutos y subir la carga de 100  a 500 peticiones por segundo durante 5 minutos y finalmente el sistema debe asumir la carga de 1000 peticiones por segundo durante 5 minutos.



# Versión 1 Vista de Datos
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/ModeloERv2.png)

El anterior modelo presenta las entidades de datos identificadas y como se relacionan entre ellas. Este modelo esta pensado para ser implementado en una motor de bases de datos no relacional, que permite garantizar tiempo de respuesta al contar con grandes volúmenes de datos, pues se espera un crecimiento en cantidad de transacciones en un periodo de 12 meses.