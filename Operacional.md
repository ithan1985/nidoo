# Versión 1 Política de funcionamiento para el Balanceador de Carga
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/BalancerPolicy.png)

En este modelo se presenta la política de funcionamiento establecida para el balanceador de carga, Inicialmente todo el trafico se va a dirigir al servidor de Backend 1, en el momento en que dicho servidor llegue a tener una carga de trabajo superior al 50% de su capacidad de procesamiento las peticiones se van a enviar al servidor de Backend 2.



# Versión 1 Modelo de Instalación
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/InstallationModel.png)

En este modelo se presenta el proceso de instalación de la aplicación. Para la instalación se requieren 2 equipos destinados a Backend, 1 equipo para Frontend , 1 equipo para la base de datos MongoDB y un equipo para el proxy/balanceador de carga.

# Versión 1 Modelo de Integración Continua
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint-3-vista_Operacional.png)

En este modelo se propone el proceso a seguir para realizar despliegues de nuevas versiones de la aplicación Nidoo en los nodos de computo propuestos.