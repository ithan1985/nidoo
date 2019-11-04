Listado de Requerimientos Arquitecturalmente Significativos
-
ASRID|Atributo de calidad|Enunciado|Fuente|Artefacto
-|-|-|-|-
ASR1 | Confidencialidad | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional, otorgando acceso a la plataforma de acuerdo a su perfil. | Administrador de la plataforma | Módulo Autenticación
ASR2 | Confidencialidad | Crud autorizaciones de ingreso para uno o dos carros o conductores, para garantizar el ingreso a las instalaciones del parqueadero a los conductores y vehículos autorizados. | Administrador de la plataforma | Módulo Dashboard
ASR3 | Confidencialidad | Al registrarse un usuario el sistema debe mostrar un mensaje donde autorice el tratamiento de sus datos personales. | Administrador de la plataforma | Módulo de registro
ASR4 | Confidencialidad | El usuario intentando modificar su perfil sin autorización del administrador de la plataforma. | Administrador de la plataforma | Módulo de usuarios
ASR5 | Confidencialidad | Al comunicarse las partes implicadas: Sistemas, plataforma, personas ya identificadas (autenticadas), se realice de manera segura en cada transacción. | Administrador de la plataforma | Front-End y Back-End
ASR6 | Escalabilidad | Como un administrador de la plataforma yo quiero ingresar al sistema con mi usuario y contraseña para poder gestionar los permisos de acceso a los usuarios | Administrador de la plataforma | Modulo de Seguridad y Autenticación
ASR7 | Escalabilidad | Como un Administrador yo quiero Saber la cantidad de usuarios que utilizan la plataforma para Poder evaluar la cantidad de recursos que debo contratar en la nube | Administrador de la plataforma | Front-End y Back-End
ASR8 | Escalabilidad | El sistema debe generar la factura de cada utilizacion del parqueadero en el modelo on-demand y tener la capacidad de soportar picos de uso garantizando la respuesta en máximo 5 segundos | Administrador de la plataforma | Pasarela de pagos
ASR9 | Escalabilidad | El sistema debe realizar las transferencias de los porcentajes de dinero que le corresponden a los proveedores de los parqueaderos y generar el reporte correspondiente. | Administrador de la plataforma | Pasarela de pagos
ASR10 | Escalabilidad | El sistema debe realizar los calculos y aprovisionamiento de impuestos por cada factura dependiendo de la tributacion aplicable y generar el reporte correspondiente | Administrador de la plataforma | Back-End
ASR11 | Disponibilidad | El sistema deberá facilitar una alta disponibilidad, el portal será accesible el 90% del tiempo, en ocasiones la página no será visible o el servicio denegado al usuario, trate de acceder más tarde. | Interacción de los usuarios | Sistema Nidoo
ASR12 | Disponibilidad | El sistema no debe fallar al momento de realizar alguna actualización y permanecer disponible. | Administrador de la plataforma | Sistema Nidoo
ASR13 | Disponibilidad | El sistema debe estar disponible el 99,99% de la veces, dado que la solicitud de parqueadero se puede dar cualquier día y hora del año. | Administrador de la plataforma | Sistema Nidoo
ASR14 | Disponibilidad | El sistema debe estar disponible el 99,99% de la veces, dado que se debe poder actualizar el estado del espacio de parqueadero para la oferta | Administrador de la plataforma | Sistema Nidoo
ASR15 | Disponibilidad | El sistema debe estar disponible el 99,99% de la veces, dado que la facturación on-demand, requiere realizar cálculos en cualquier momento. | Administrador de la plataforma | Sistema Nidoo
ASR16 | Latencia | El sistema debe calcular el pago del servicio en menos de 5 segundos para que el usuario pueda visualizar su facturación rápidamente sobre el modelo on-demand | Modulo de operador | Pasarela de pagos
ASR17 | Latencia | Tener control de la disponibilidad de los parqueaderos para que el administrador de la empresa pueda disponer de ellos en la plataforma de manera más inteligente | Administrador de la plataforma | Módulo Dashboard
ASR18 | Latencia | Alertar a los encargados del parqueadero de la llegada de un vehículo | Administrador de la plataforma | Módulo de notificaciones
ASR19 | Latencia | Notificar al propietario o encargado del espacio para validar que el espacio está disponible | Administrador de la plataforma | Módulo Dashboard
ASR20 | Latencia | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional. De esta forma logramos que en un parqueadero público nos reserven el espacio requerido. | Administrador de la plataforma | Aplicación o disposivo adicional
ASR21 | Confidencialidad | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional, otorgando acceso a la plataforma de acuerdo a su perfil. | Administrador del espacio | Módulo Autenticación
ASR22 | Confidencialidad | Crud autorizaciones de ingreso para uno o dos carros o conductores, para garantizar el ingreso a las instalaciones del parqueadero a los conductores y vehículos autorizados. | Administrador del espacio | Módulo Dashboard
ASR23 | Confidencialidad | Al registrarse un usuario el sistema debe mostrar un mensaje donde autorice el tratamiento de sus datos personales. | Administrador del espacio | Módulo de registro
ASR24 | Confidencialidad | El usuario intentando modificar su perfil sin autorización del administrador de la plataforma. | Administrador del espacio | Módulo de usuarios
ASR25 | Confidencialidad | Al comunicarse las partes implicadas: Sistemas, plataforma, personas ya identificadas (autenticadas), se realice de manera segura en cada transacción. | Administrador del espacio | Front-End y Back-End
ASR26 | Escalabilidad | Como administrador de espacios poder consultar el consolidado de todos los parqueaderos que tiene alquilados y estan libres | Administrador del espacio | DashBoard Convenios Empresariales, Back-End
ASR27 | Escalabilidad | Como administrador de espacios poder consultar consolidado de todos los parqueaderos que tiene alquilados y estan ocupados | Administrador del espacio | DashBoard Convenios Empresariales, Back-End
ASR28 | Escalabilidad | Como administrador de espacios poder generar reporte mensual de las utilizaciones($) realizadas en sus parquederos. | Administrador del espacio | DashBoard Convenios Empresariales, Back-End
ASR29 | Escalabilidad | Como administrador de espacios poder reasignar el parqueadero asignado a cualquier vehiculo del convenio empresarial que administro | Administrador del espacio | DashBoard Convenios Empresariales, Back-End
ASR30 | Escalabilidad | Actualizacion de un espacio disponible por mensaje recibido de un sensor en el parquedero | Administrador del espacio | DashBoard Convenios Empresariales, Back-End
ASR31 | Disponibilidad | El sistema deberá facilitar una alta disponibilidad, el portal será accesible el 90% del tiempo, en ocasiones la página no será visible o el servicio denegado al usuario, trate de acceder más tarde. | Interacción de los usuarios | Sistema Nidoo
ASR32 | Disponibilidad | El administrador debería poder activar o desactivar su servicio en cualquier momento y que su cambio de estado se pueda hacer justo cuando lo necesite | Administrador del espacio | Módulo de registro
ASR33 | Disponibilidad | El administrador debería poder autorizar los ingresos en cualquier momento y dar respuesta a las de los mismos. | Administrador del espacio | Módulo de registro
ASR34 | Disponibilidad | El administrador debería poder revisar la ocupación de los parqueaderos en cualquier momento | Administrador del espacio | Módulo Dashboard
ASR35 | Disponibilidad | El administrador debería poder realizar la consulta de las ganancias en cualquier momento | Administrador del espacio | Módulo Dashboard
ASR36 | Latencia | Como administrador del espacio quiero encontrar rápidamente información del usuario para asigar el espacio de parqueadero | Administrador del espacio | Módulo de usuarios
ASR37 | Latencia | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional, otorgando acceso a la plataforma de acuerdo a su perfil. | Administrador del espacio | Módulo Dashboard
ASR38 | Latencia | Realizar pago desde el dashboard por el arrendamiento de los parqueaderos | Administrador del espacio | Pasarela de pagos
ASR39 | Latencia | Tener control de la disponibilidad de los parqueaderos para poder disponer de ellos en la plataforma de manera más inteligente | Administrador del espacio | Módulo Dashboard
ASR40 | Latencia | Asigar parqueaderos a usuarios que necesiten el servicio | Administrador del espacio | Módulo Dashboard
ASR41 | Confidencialidad | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional, otorgando acceso a la plataforma de acuerdo a su perfil. | Operador | Módulo Autenticación
ASR42 | Confidencialidad | Autorizar ingreso y salida del vehiculo de las instalaciones del parqueadero o espacio | Operador | Módulo de operacion
ASR43 | Confidencialidad | Al registrarse un usuario el sistema debe mostrar un mensaje donde autorice el tratamiento de sus datos personales. | Operador | Módulo de registro
ASR44 | Confidencialidad | El usuario intentando modificar su perfil sin autorización del administrador de la plataforma. | Operador | Módulo de usuarios
ASR45 | Confidencialidad | Al comunicarse las partes implicadas: Sistemas, plataforma, personas ya identificadas (autenticadas), se realice de manera segura en cada transacción. | Operador | Front-End y Back-End
ASR46 | Escalabilidad | Recibir el mensaje de alerta sobre un vehiculo en camino | Operador | Modulo Notificaciones
ASR47 | Escalabilidad | Realizar el chequeo de los datos de un vehiculo. | Operador | Front-End y Back-End
ASR48 | Escalabilidad | Realizar el chequeo de un conductor que retira un vehiculo. | Operador | Front-End y Back-End
ASR49 | Escalabilidad | Consultar el reporte de los vehiculos y conductores que han entrado hoy al parqueadero | Operador | Front-End y Back-End
ASR50 | Escalabilidad | Registrar que el parqueadero no prestará servicio en unas fechas en particular | Operador | Front-End y Back-End
ASR51 | Disponibilidad | El sistema deberá facilitar una alta disponibilidad, el portal será accesible el 90% del tiempo, en ocasiones la página no será visible o el servicio denegado al usuario, trate de acceder más tarde. | Interacción de los usuarios | Sistema Nidoo
ASR52 | Disponibilidad | El operario podrá activar o desactivar la disponibilidad de un espacio, en el mismo momento que se ocupe o desocupe | Operador | Modulo de usuarios
ASR53 | Disponibilidad | Que las alertar de arribo de vehículo, lleguen en el momento real, para que el operario sea notificado efectivamente | Operador | Modulo de usuarios
ASR54 | Disponibilidad | El operario podrá verificar la identidad del conductor previamente autorizado en el mismo momento del arribo del vehículo | Operador | Modulo de usuarios
ASR55 | Disponibilidad | El operario podrá cobrar el consumo del servicio de parqueadero en el momento exacto que le vehículo salga. | Operador | Modulo de usuarios
ASR56 | Latencia | Como operador quiero encontrar rápidamente información del usuario para poder manejar sus permisos de acceso y cotejar con la información presentada | Operador | Módulo de usuarios
ASR57 | Latencia | Como operador quiero tener información del vehículo que se aproxima para tener los permisos de acceso listos en el momento del ingreso | Operador | Módulo Dashboard
ASR58 | Latencia | Como operador quiero tener notificaciones para validar que el espacio está disponible | Operador | Módulo Dashboard
ASR59 | Latencia | El sistema debe calcular el pago del servicio en menos de 5 segundos para que el usuario pueda visualizar su facturación rápidamente sobre el modelo on-demand | Operador | Pasarela de pagos
ASR60 | Latencia | Alertar a los encargados del parqueadero de la llegada de un vehículo | Operador | Módulo de notificaciones
ASR61 | Confidencialidad | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional, otorgando acceso a la plataforma de acuerdo a su perfil. | Conductor | Módulo Autenticación
ASR62 | Confidencialidad | Solicitar ingreso para uno o dos carros y uno o dos conductores | Conductor | Módulo de registro
ASR63 | Confidencialidad | Al registrarse un usuario el sistema debe mostrar un mensaje donde autorice el tratamiento de sus datos personales. | Conductor | Módulo de registro
ASR64 | Confidencialidad | El usuario intentando modificar su perfil sin autorización del administrador de la plataforma. | Conductor | Módulo de usuarios
ASR65 | Confidencialidad | Al comunicarse las partes implicadas: Sistemas, plataforma, personas ya identificadas (autenticadas), se realice de manera segura en cada transacción. | Conductor | Front-End y Back-End
ASR66 | Escalabilidad | el conductor realiza la busqueda de espacios on-demand disponibles en el area de busqueda | Conductor | Front-End y Back-End
ASR67 | Escalabilidad | El conductor realiza la reserva del espacio on-demand seleccionado | Conductor | Front-End y Back-End
ASR68 | Escalabilidad | El condutor registra una unica ves el registro de la tarjeta para pagar que sean cargados los usos de parquederor | Conductor | Front-End y Back-End
ASR69 | Escalabilidad | El conductor quiere ver el reporte de usos recientes para controlar su cuenta de gastos | Conductor | Front-End y Back-End
ASR70 | Escalabilidad | El conductor quiere realizar el registro de un nuevo vehiculo | Conductor | Front-End y Back-End
ASR71 | Disponibilidad | El sistema deberá facilitar una alta disponibilidad, el portal será accesible el 90% del tiempo, en ocasiones la página no será visible o el servicio denegado al usuario, trate de acceder más tarde. | Interacción de los usuarios | Sistema Nidoo
ASR72 | Disponibilidad | El conductor realiza una consulta para identificar que opciones tiene de parqueadero en la zona donde va a llegar al instante que lo necesita | Conductor | Aplicación o página web
ASR73 | Disponibilidad | El conductor puede consultar las tarifas de los parqueaderos disponibles al momento de seleccionarlo | Conductor | Aplicación o página web
ASR74 | Disponibilidad | el conductor puede conocer el consumo actual al instante que lo consulte. | Conductor | Aplicación o página web
ASR75 | Disponibilidad | El conductor titular podría asignar conductor temporal sustituto para que recoja el vehículo, en el mismo instante de lo requiera | Conductor | Aplicación o página web
ASR76 | Latencia | Como conductor quiero encontrar parqueadero en menos de 5 segundos | Conductor | Aplicación o página web
ASR77 | Latencia | El sistema debe calcular el pago del servicio en 5 segundos para visualizar la facturación rápidamente sobre el modelo on-demand | Conductor | Pasarela de pagos
ASR78 | Latencia | Tener una solución de acceso inmediato desde la aplicación o algún dispositivo adicional. De esta forma logramos que en un parqueadero público nos reserven el espacio requerido. | Conductor | Aplicación o página web
ASR79 | Latencia | Al terminar el servicio en el parqueadero, realizar pago desde la tarjeta de crédito inscrita | Conductor | Pasarela de pagos
ASR80 | Latencia | Al terminar el servicio en el parqueadero, realizar pago con el dinero que tenga disponible dentro de la aplicación | Conductor | Pasarela de pagos