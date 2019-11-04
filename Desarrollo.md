# Versión 1
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint%202%20Ver%201.0-VistaDesarrolloVer1.jpg)

En el primer acercamiento del grupo de trabajo con las nuevas tecnologías utilizadas, se decidió mantener FrontEnd y BackEnd en una solo servidor virtualizado el cual esta configurado de la siguiente manera:

* SO: Ubuntu 18.04
* Ram: 2GB
* Disk: 10GB
* CPU: 1 core

En este servidor instalamos las herramientas a través del administrador de paquetes npm. Se instalo vuepack, nodejs, express, mogoose. A continuación se lista el detalle de paquetes utilizados en la solución:

![paquetes instalados](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/paquetesInstalados.png?raw=true)

El scaffolding del proyecto creado es de uso general y se creo de la siguiente manera:

![scaffolding](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/scaffoldingNidoo.png?raw=true)

Los componentes de presentación están localizados en la ruta src/componentes.
Los componentes de negocio y persistencia van ubicados en la ruta routes y model.


# Versión 2
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint%202%20Ver%201.0-VistaDesarrolloVer2.jpg)

Una ves definido nuestro estilo de arquitectura por capas en donde se crearon maquinas virtuales, para soportar de manera separada el Front-End del Back-End y la base de de datos no SQL. Cada servidor virtualizado tiene la siguiente configuración:

* SO: Ubuntu 18.04
* Ram: 2GB
* Disk: 10GB
* CPU: 1 core

El Scaffolding del proyecto que se definió para el FrontEnd es el siguiente:

![FrontEnd](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/scaffoldingFrontEnd.png?raw=true)

Los componentes Principales del Front-End se encuentran ubicados en la ruta src/components, allí se ubican los elementos de la vista que para esta tecnología son archivos de extensión .vue, el modelo para la capa de presentación esta ubicado en el folder model y allí se define un documento JSON que contiene datos relevantes de la factura.

El Scaffolding del proyecto que se definió para el BackEnd es el siguiente:

![BackEnd](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/scaffoldingBackEnd.png?raw=true)

Los elementos principales en el backEnd esta ubicados en el folder server. En el folder models se encuentra definido el modelo del documento JSON a persistir, de la factura llamado Invoice. En el componente app.js ubicado en la ruta server/src se encuentran definido los servicios REST que exponen el CRUD de la factura.


# Recomendaciones de Codificación
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint-3-VistaDesarrollo.png)

Este modelo presenta una serie de pasos y recomendación que se deben seguir para asegurar desde la codificación del programa la disponibilidad Funcional al intentar asegurar que el aplicativo Nidoo y sus diversos componentes no entren en un estado de error por errores en tipo de ejecución no capturados.