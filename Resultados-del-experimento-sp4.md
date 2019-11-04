**Prueba 1**: 

![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Prueba1%20-%20Disponibilidad.png?raw=true)
:---:
Figura 1: Resultados prueba de disponibilidad con 1500 usuarios durante 5 minutos.

**Prueba 2**: 

![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Prueba2.1%20-%20Disponibilidad.png?raw=true)

![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Prueba2.2%20-%20Disponibilidad.png?raw=true)
:---:
Figura 2: Resultados prueba de disponibilidad con 1500 usuarios durante 5 minutos con una base de datos apagada.

En la prueba 1, la creación de factura con 1500 usuarios durante 5 minutos arrojó que todas las peticiones de creación fueron exitosas, es decir que el sistema estuvo disponible el 100% del tiempo. Adicionalmente se evidenció una latencia promedio de 833ms.

En la prueba 2, la creación de factura con 1500 usuarios durante 5 minutos con apagado de una de las bases de datos en el intermedio de la prueba arrojó que todas las peticiones de creación fueron exitosas, es decir que el sistema estuvo disponible el 100% del tiempo. Adicionalmente se evidenció una latencia promedio de 833ms.

El resultado de las pruebas refleja que la arquitectura propuesta y las herramientas utilizadas para el desarrollo de la funcionalidad soportan la métrica de disponibilidad del 99.99% simulando apagados de las maquinas de base de datos y de uno de los Backend o Frontend.

## Punto de sensibilidad identificado
Llegamos a la conclusión que el componente de base de datos redundante y el balanceador en la arquitectura es determinante, ya que permite enmascarar fallas en el sistema si se presentan anomalías con las maquinas de FrontEnd, Backend y Bases de datos. Esto nos permite tener alta disponibilidad para recibir todas las peticiones de creación de factura. 
Dada la implementación de este componente, podemos escalar horizontalmente la arquitectura en cuanto a las maquinas de FrontEnd, Backend y Bases de datos para mantener mayor disponibilidad en la plataforma.

[![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/back_arrow.png)Modelos diseñados durante este sprint](Modelos-diseñados-durante-este-sprint-sp3) / [Video![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/next_arrow.png)](Video-sp3)