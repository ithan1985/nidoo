**ASR5 - escalabilidad:** El sistema debe generar la factura de cada utilización del parqueadero en el modelo on-demand y tener la capacidad de soportar picos de uso garantizando la respuesta en máximo 5 segundos

El estilo arquitectónico seleccionado para la aplicación NIDOO teniendo en cuenta el ASR del atributo de escalabilidad, es un estilo Load Balancer +	Stateless nodes + Storage un esquema Cliente Servidor.

Se definen 3 capas  para la organización de la aplicación:

1. **Tier de Acceso:** Este componente es un proxy y balanceador que atiende las peticiones de los usuarios y las dirige al Tier Web, balanceando cada 300 peticiones.

1. **Web Tier:** Donde se alojan los componentes para la presentación de información al usuario y manejo de eventos. 
Este tier internamente usa un estilo MVC, en el cual se escala la funcionalidad de facturación ampliando el nodo de backEnd y asi atender las interacciones de usuario en una escalabilidad transitoria.

1. **Data Tier:** Donde se alojan los componentes de acceso a datos y la base de datos.

