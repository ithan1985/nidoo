# Listado de las historias de arquitectura (Backlog)
En la definición de las historias de arquitectura, cada integrante del grupo redactó la narrativa correspondiente a la historia enfocado en el atributo de calidad asignado, definiendo la fuente y el artefacto al cual va dirigida la funcionalidad.

El terminar este ejercicio tenemos un total de 80 historias de usuario, que al final se convierten en nuestro Backlog inicial.

Posteriormente se definieron las historias de usuario arquitectónicamente significativas ASR’s por cada Stakeholder, nosotros identificamos 4:

Administrador de espacios
Administrador de la plataforma
Conductor
Operador del parqueadero
 
# Priorización de los atributos de calidad y de los ASR's
Después de listar estas historias de usuario, cada integrante del grupo asignó un puntaje de importancia para cada historia, con el fin de dar una priorización inicial.

Posteriormente se realizó la identificación de los riesgos, en la cual se establecieron los stakeholder y a criterio de cada integrante del grupo se colocó la importancia que podría representar el atributo de calidad para cada uno de los actores identificados, y según el resultado de los cálculos para nosotros la importancia en su orden de prioridad fue el siguiente:

Escalabilidad: debido a la visión de crecimiento de Nidoo con el paso a la modalidad on-demand, la expansión a otras ciudades y países.
 
Confidencialidad: Con el manejo de los datos tanto de los conductores como los dueños de los espacios para parqueadero, es importante abordar y garantizar la confidencialidad de los datos personales.

Latencia: Aunque es importante tener una respuesta rápida a cualquier solicitud de búsqueda, facturación de tiempos, entre otros. También pensamos que puede tener un manejo más flexible.

Disponibilidad: Igual que la latencia, este atributo no deja de ser importante, pero según nuestro análisis de riesgos, la disponibilidad no tendría tanta prioridad.

Después del análisis decidimos aterrizar las historias de usuario de arquitectura más relevantes y hacer una priorización definitiva según la importancia de los stakeholders y la dificultad que podría representar para el arquitecto realizar dicho requerimiento.

# Restricciones de negocio
La cantidad de usuarios registrados actualmente es 4,000. Se espera que con la modalidad por minutos la ocupación de parqueaderos subiría en 10x.

Nidoo debe tener presencia en 10 ciudades de latinoamérica en 5 años.

Nidoo debe estar en 12 meses trabajando bajo el modelo on-demand (tener acceso a todos los parqueaderos por minuto).

Se requiere un sistema que alerte a los encargados del parqueadero de la llegada de un vehículo.

La solución de este sistema debe ser incluyente, dado que el encargado del parqueadero puede ser el portero del edificio residencial o comercial o el operario de un parqueadero público.

El sistema debe notificar al propietario o encargado del espacio para validar que está disponible.

Tener acceso a la plataforma desde una aplicación o un dispositivo adicional.

La solución debe ser escalable en diferentes países, bajo diferentes legislaciones y esquemas tributarios.
 
# Restricciones de tecnología
El Sistema de facturación, administración y contabilidad debe ser Alegra
La herramienta para ventas y administración de relaciones con los clientes (CRM) debe ser Pipedrive
La herramienta para gestionar redes sociales debe ser Hootsuite
La herramienta de mercadeo por correo electrónico y mensajería SMS debe ser Activecampaign
El sistema de control de versiones y repositorio de código fuente debe ser Github
La administración de proyectos se debe llevar en Trello
Se debe utilizar como plataforma de computación en la nube, los servicios de Amazon Web Services (AWS)
 
# Un modelo de contexto donde se resalta los estilos de arquitectura implementados
En el modelo de contexto, y según las decisiones tomadas en la reuniones de trabajo el estilo que implementamos en este modelo fue el Estilo de arquitectura de la familia asignación y uno de los más conocidos como el map reduce, en el modelo se ve que separamos por acciones especializadas los procesos que consideramos críticos para la operación de Nidoo, como son : Un sistemas especializado para las búsquedas de espacio o parqueaderos por los conductores, y otro que es el encargado del resto de los servicios, por ejemplo, la facturación del tiempo, la admiración del espacio entre otros, lo mismo pasó con las bases de datos las separamos según la función que van hacer, tenemos un proxy para la salida a internet y el filtro para el ingreso de los actores que identificamos, como conductores, administradores, operadores. Un sistema de notificación, de envió de email y sms, y un sistema de pasarela de pagos.

# Un modelo con los elementos del dominio del problema y sus relaciones donde se resalta los estilos de arquitectura implementados

En el diagrama de dominio se definieron las entidades relevantes y sus relaciones y es un modelo que responde a la familia módulo. En este modelo se mapean los actores del sistema a las entidades correspondientes, además se mapean componentes principales como el parqueadero, los espacios de parqueadero, la facturación y las notificaciones entre otros.

# Un modelo componente-conector con los grandes componentes de la arquitectura donde se resalta los estilos de arquitectura implementados

En el diagrama de componente-conector se definieron los componentes relevantes y sus relaciones donde se consideró la gestión de alertas como un componente transversal a las demás funcionalidades. También se describió la relación entre los demás componentes teniendo en cuenta la interoperabilidad entre estos.

Adicionalmente se describieron los objetos más relevantes de cada componente para dar un entendimiento básico del funcionamiento de la herramienta.

# Un modelo de despliegue general de la arquitectura donde se resalta los estilos de arquitectura implementados
En este modelo se puede observar las diferentes soluciones y tecnologías que se proponen para ofrecer alta disponibilidad, rendimiento, confiabilidad, modificabilidad, escalabilidad y latencia.
 
Las anteriores soluciones de código abierto confiables, fáciles de implementar son capaces de manejar el tráfico esperado y cumplen con los atributos de calidad identificados, para ser desplegados en el sistema de computación de nube AWS.
 
 
# Análisis de los aspectos que han funcionado en el equipo
Reuniones semanales para verificar el estado del trabajo, resolver dudas y dar apoyo a los compañeros. 

Revisiones cruzadas de las tareas asignadas.

Los integrantes del grupo cumplen con las responsabilidades que se les son asignadas.

# Análisis de los aspectos que no han funcionado en el equipo, y los compromisos individuales y de grupo para próximos sprints.

No estamos siendo puntuales en los horarios de las reuniones.

Fuera de las reuniones semanales, la comunicación no es muy seguida.

No estamos consultado al profesor ni al monitor cuando no tenemos claridad de algunos temas.

# Compromisos  
Llegar temprano a las reuniones.
Comunicarnos más seguido (mínimo 2 Daily work a la semana).
Consultar con el profesor o el monitor cuando tengamos dudas.
