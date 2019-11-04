# Versión 1
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_funcional_sp1.jpg)

Por medio de un navegador se ingresa al sitio web de Nidoo al módulo de factura, donde se registran y capturan los datos para pasarlos al modelo de persistencia el cual mediante servicios rest realiza el intercambio de datos y actualización de la información en el sistema con la base de datos luego de calcular los costos; finalmente como resultado se obtienen los datos de facturación para presentarlos al usuario en menos de 5 segundos.

# Versión 2
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_funcional_sp2.jpg)

Por medio de un navegador se ingresa al sitio web de Nidoo al módulo de factura, donde se registran y capturan los datos para pasarlos al modelo de persistencia ahora balanceado para atender más peticiones en paralelo, en el cual mediante servicios rest se realicen los intercambios de datos y actualizaciones de la información en el sistema con la base de datos luego de calcular los costos; finalmente como resultado se obtienen los datos de facturación para presentarlos al usuario en menos de 5 segundos.

# Versión 3
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint_3-modelo_funcional_facturación.jpg)

Se cambia el modelo del Componente de Facturación para actualizar el cambio realizado en la capa de datos, Adicionalmente se adiciona el balanceador de carga entre el nodo de forntend y los nodos de backend y se incluye el componente de Logueo de operaciones, cuyo propósito es guardar el registro de todas las operaciones realizadas por el componente de facturación. Se adiciona ademas comunicacion del modulo de facturas con el modulo de manejo de parqueaderos de forma que al procesar una factura se envía un mensaje sincrónico al componente manejador de parqueaderos para que actualice la información de disponibilidad de parqueaderos en el mapa de búsquedas.

![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint_3-modelo_funcional_reserva.jpg)

Se adiciona el modelo para el componente de reserva de parqueaderos. Este recibe peticiones del frontend atraves de l balanceador de carga que reparte las peticiones entre el Nodo 1 de backend y el nodo 2; el componente de reservas en el backend se comunica con: el componente Log de operaciones para guardar todas las operaciones de reserva realizadas y los nodos de base de datos para realizar la persistencia de la información. adicionalmente al procesar una reserva se envía un mensaje sincrónico al componente manejador de parqueaderos para que actualice la información de disponibilidad de parqueaderos en el mapa de búsquedas.

# Versión 4

Facturación:
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint4ModeloFuncionalFacturaci%C3%B3n.png?raw=true)

Reserva:
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint4ModeloFuncionalReserva.png?raw=true)

Para ambos modelos se incluyen los componentes que apalancan el atributo de seguridad. Este se ve reflejado en cuanto ya se dispone de un formulario de autenticación que permite como su nombre validar y autorizar el ingreso del usuario. La comunicación hacia los componentes del backend cambian y ahora se realizan utilizando protocolo Https e incorporando la utilización de tokens JWT dentro del payload de las peticiones Https. Del lado del Back-end se encuentra el componente que permite verificar los datos de autenticación y dejan el respectivo rastro en las colecciones de BD para la auditoria.
