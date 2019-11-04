Para garantizar el cumplimiento de los ASR de latencia seleccionados se opta por utilizar tácticas relacionadas con el manejo de los recursos, las tácticas utilizadas son:

1. **Mantener múltiples copias de datos:** Para asegurar que los tiempos de respuesta de la base de datos sean aceptables, al no depender de un único repositorio de datos.

1. **Agendar uso del Recurso:** Para esto se asigna un tier Adicional que va a contener un balanceador de carga y un proxy para atender las peticiones de los usuarios y luego pasarlas al Tier Web para que sean atendidas.

1. **Introducir Concurrencia:** Para procesar las tareas relacionadas con el cambio de estado del parqueadero (ingreso y salida del vehículo) y la generación de la factura para el conductor y el operario del parqueadero.

[![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/back_arrow.png)Estilo de arquitectura seleccionado](Estilo-de-arquitectura-seleccionado-sp1) / [Modelos y vistas diseñadas durante este sprint![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/next_arrow.png)](Modelos-y-vistas-diseñadas-durante-este-sprint-sp1)
