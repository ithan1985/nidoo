Dado el ASR de mayor prioridad que elegimos para el experimento, se requiere calcular el pago del servicio de parqueo en el modelo on-demand y tener la capacidad de soportar picos de uso garantizando la respuesta en máximo 5 segundos. Para esto, se realizó el experimento de la funcionalidad usando Jmeter para agregar la concurrencia necesaria. El experimento consiste en ingresar a la página dispuesta para crear la factura y llenar un formulario con datos básicos (Placa, nombre del cliente, Cantidad de minutos y el valor por minuto); esta información será enviada para calcular el costo del servicio. La prueba se realizó durante 5 minutos agregando cantidades diferentes de usuarios concurrentes, la arquitectura debe ser capaz de soportar los registros de usuarios. El resultado de cada escenario se explicará a continuación:

**Prueba 1**: 66 usuarios por minuto (20.000 usuarios registrados en 5 minutos)

![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/20000%20usuarios.PNG)
:---:
Figura 1: Resultados prueba de escalabilidad con 66 usuarios durante 5 minutos.

**Prueba 2**: 100 usuarios por minuto (30.000 usuarios registrados en 5 minutos) 

![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/30000%20usuarios.PNG)
:---:
Figura 2: Resultados prueba de escalabilidad con 100 usuarios durante 5 minutos.

**Prueba 3**: 250 usuarios por minuto (75.000 usuarios registrados en 5 minutos)

![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/75000%20usuarios.PNG)
:---:
Figura 3: Resultados prueba de escalabilidad con 250 usuarios durante 5 minutos.

La prueba 1 arrojó que la creación de factura con 66 usuarios por segundo durante 5 minutos creó 20.000 usuarios con una latencia promedio de 571ms y todas las peticiones de creación fueron exitosos. La solicitud de creación de usuario con la latencia más alta fue de 1118ms.

La prueba 2 arrojó que la creación de factura con 100 usuarios por segundo durante 5 minutos creó 30.000 usuarios con una latencia promedio de 602ms y todas las peticiones de creación fueron exitosos. La solicitud de creación de usuario con la latencia más alta fue de 1573ms.

La prueba 3 arrojó que la creación de factura con 250 usuarios por segundo durante 5 minutos creó 57.240 usuarios con una latencia promedio de 834ms y con un porcentaje de error en las peticiones de 23.68% (17.760 peticiones perdidas). La solicitud de creación de usuario con la latencia más alta fue de 3702ms.

El resultado de las primeras dos pruebas refleja que la arquitectura propuesta y las herramientas utilizadas para el desarrollo de la funcionalidad soportan la métrica de 5 segundos de latencia por la cantidad de solicitudes creadas en un tiempo determinado que se propuso en el ASR.

Esto nos deja ver que la latencia de la aplicación está muy por debajo de la métrica, lo que nos da el cumplimiento no solo de esta ASR sino que nos brinda un margen amplio para cumplir con otros requerimientos de calidad.

Como equipo quisimos ver hasta donde podía soportar nuestra arquitectura creando facturas, por esto realizamos la prueba 3 donde nos encontramos con alto porcentaje de error en las peticiones (23.68%, 17.760 peticiones perdidas). Este porcentaje podría reducirse o incluso eliminarse si agregamos más maquinas de backend para soportar la demanda de peticiones y dada la infraestructura con el componente balanceador, podemos realizar esta operación fácilmente.

## Punto de sensibilidad identificado
Llegamos a la conclusión que el componente balanceador en la arquitectura es determinante, ya que permite segmentar la capa operacional en los dos backend dispuestos para recibir todas las peticiones de creación de factura. Dada la implementación de este componente nos permite escalar horizontalmente la arquitectura en cuanto a las maquinas de backend para que soporten mayores cantidades de peticiones.

[![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/back_arrow.png)Modelos y vistas diseñadas durante este sprint](Modelos-y-vistas-diseñadas-durante-este-sprint-sp2) / [Video![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/next_arrow.png)](Video-sp2)



