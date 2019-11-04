**ASR16 - latencia:** El sistema debe calcular el pago del servicio en menos de 5 segundos para que el usuario pueda visualizar su facturación rápidamente sobre el modelo on-demand.

El estilo arquitectónico seleccionado para la aplicación NIDOO teniendo en cuenta el ASR del atributo de latencia es un estilo Multi-tier en un esquema Cliente Servidor. se definen 4 tiers para la organización de la aplicación:

1. **User Terminal tier:** Se usa para representar la aplicación (Web Browser) usada por el usuario para conectarse con el sitio de NIDOO.

1. **Web Tier:** Donde se alojan los componentes para la presentación de información al usuario y manejo de eventos. Este tier internamente usa un estilo MVC, para atender las interacciones de usuario.

1. **BackEnd Tier:** Donde se alojan los componentes de acceso a datos y la base de datos.

1. **Tier Balanceo de Carga:** En este se alojan un balanceador de carga y un proxy para atender las peticiones de los usuarios y dirigirlas las Tier Web.

Los clientes se conectan al tier de balanceo de carga quien atiende y organiza las solicitudes de los clientes, se encarga de pasarlas a el tier web, que muestra información para el usuario, realiza cálculos y obtiene información del Tier de Backend, quien se encarga de manejar el acceso a las múltiples bases de datos.

[![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/back_arrow.png)ASRs considerados durante este sprint](ASRs-considerados-durante-este-sprint-sp1) / [Tácticas de arquitectura utilizadas![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/next_arrow.png)](Tácticas-de-arquitectura-utilizadas-sp1)