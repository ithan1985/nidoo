# Versión 1
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_concurrencia_sp1.jpg)

En nuestro acercamiento inicial a la arquitectura se definió como los usuarios van a interactuar con el sistema y como las peticiones van a ser atendidas. Inicialmente se encuentra un servicio que inicia el conteo de tiempo cuando el usuario llega al parqueadero, este lleva cuenta de los minutos y segundos que se demora en volver el usuario por su vehiculo. Luego el operador detiente el contador de tiempo desde el sistema y se llama a la función de generar factura, que consultará la información del usuario y creará una nueva factura.

# Versión 2
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_concurrencia_sp2.jpg)
 
Dado el ASR atacado en esta iteración y el enfoque de escalabilidad, se modificó el modelo de concurrencia agregando los servicios expuestos ahora en 2 backend, estos representan los mismos servicios de la primera iteración pero agregando mayor disponibilidad al repetir este servicio en otra maquina lo que nos apoya con la atención a la cantidad de peticiones realizadas por los usuarios.

# Versión 3
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint%203-vista_de%20concurrencia.png?raw=true)
 
Dado el ASR atacado en esta iteración y el enfoque de disponibilidad, se modificó el modelo de concurrencia agregando hilos que representan las 3 bases de datos de Mongo implementadas, estos representan los mismos servicios de la primera iteración pero agregando mayor disponibilidad al repetir este servicio en otra maquina lo que nos apoya enmascarando fallas de disponibilidad en caso que una de las bases de datos no responda.

# Versión 4
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint%204-vista_de%20concurrencia.jpg?raw=true)

El ASR atacado en esta iteración y el enfoque de seguridad, se modificó el modelo de concurrencia agregando una validación de la sesión para el usuario operador que realiza el inicio y fin del contador de tiempo que el usuario hace uso del parqueadero, además de realizar la misma validación para poder generar la facturación. Esto ayuda a mantener la integridad de la información y trazabilidad de las acciones realizadas dentro de la plataforma.