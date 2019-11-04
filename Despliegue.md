# Versión 1 
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_despliegue_sp0.jpg)

En nuestro acercamiento inicial a la arquitectura definida con las herramientas tecnológicas definimos una arquitectura por capas en donde la interacción del usuario se va a realizar a través de un navegador, dicho navegador hace las peticiones http a un haproxy que nos sirve de punto de acceso a la aplicación. Nuestro Front-End desarrollado en vue estaría desplegado sobre un servidor web y a su ves las peticiones hacia el BackEnd se realizaran a través de firewall.


# Versión 2
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_despliegue_sp1.jpg)

En la implementación de nuestro experimento de arquitectura utilizando herramientas tecnológicas desconocidas para el grupo de trabajo, determinamos dos cambios conceptuales drásticos que listamos a continuación:

Tanto el front-end como el back-end no requieren de servidores tradicionales como un apache, tomcat, etc. Son aplicaciones javascript que utilizan el motor de V8 de javascript diseñado por Google.

La totalidad del Front-End se ejecuta en su totalidad en el navegador del usuario, y desde este navegador se consumen los servicios REST expuestos por el BackEnd.

Estos das precisiones se ven reflejas en la versión 2 de nuestro modelo de despliegue.


# Versión 3
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_despliegue_sp2.jpg)

Nuestro modelo de despliegue en su tercera iteración refleja los ajustes realizados al aplicar las tácticas para beneficiar el atributo de calidad de escalabilidad en donde implementamos dos nodos de backEnd para absorber las cargas adicionales de trabajo, de ser necesario se pueden adicionar tantos nodos como se requieran y solo deben registrarse correctamente en el balanceador de carga. 

# Versión 4
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint-3-vista-de-Despliegue.png?raw=true)

En esta iteración del modelo de despliegue se resalta que el componente de base de datos se cambia por un clúster con replicación de MongoDB, esto con el fin de garantizar la disponibilidad de el repositorio de datos.
