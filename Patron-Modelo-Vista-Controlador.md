# Modelo Vista Controlador
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/patron_mvc.jpg)

El patrón del modelo vista controlador (MVC) separa la funcionalidad de la aplicación en tres tipos de componentes:

* Modelo:
Contiene los datos y los estados de la aplicación, proporcionando una interfaz para la lógica que requiere la capa de presentación.

* Vista:
Es la interfaz gráfica la cual permite la interacción del usuario, entrada y presentación de los datos al usuario.
que muestra parte de los datos subyacentes e interactúa con el usuario.

* Controlador:
Administra y gestiona la interacción entre el modelo y la vista, traduciendo las acciones del usuario y los cambios del modelo de datos.

Los componentes de este patrón, están conectados entre sí a través de notificaciones, eventos o devoluciones de llamada que provocan una actualización de estados y datos.

El enlace de los datos es doble, cuando hay un cambio en el modelo se comunica a la vista a través del controlador para que se esta se actualice, al igual, cuando un evento externo o una entrada de usuario se comunica al modelo a través del controlador para que el modelo actualice su estado o datos.

