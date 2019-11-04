# Resultados del experimento

Dado el ASR de mayor prioridad que elegimos para el experimento, se requiere calcular el pago del servicio de parqueo en menos de 5 segundos y lograr visualizar la factura. Para esto, se realizó el experimento de la funcionalidad usando Blazemeter.
El experimento consiste en ingresar a la página dispuesta para crear la factura y llenar un formulario con datos básicos (Placa, nombre del cliente, Cantidad de minutos y el valor por minuto); esta información será enviada para calcular el costo del servicio.
La prueba se realizó usando el complemento de Blazemeter para Google Chrome que permite previamente grabar los pasos que se realizarán durante el test para la creación de la factura. Posteriormente se realizó el test a la aplicación y se reflejó la creación de una factura con un usuario. Los resultados del test se presentan a continuación:
## Latencia presentada durante el test
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Resultados%20del%20test%20-%20Latencia%20durante%20el%20tiempo%20del%20test.png)
:---:
Figura 1: Latencia de la prueba realizada con Blazemeter durante el tiempo de la prueba.
## Latencia promedio del test
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Resultados%20del%20test%20-%20Promedio%20de%20latencia.png)
:---:
Figura 2: Promedio de latencia de la prueba realizada con Blazemeter.

El test arrojó que la creación de factura tuvo un pico de 882ms y la latencia promedio del test fue de 308.57ms, esto refleja que la arquitectura propuesta y las herramientas utilizadas para el desarrollo de la funcionalidad soportan la métrica de 5 segundos que se propuso en el ASR.

Este resultado nos deja ver que la latencia de la aplicación está muy por debajo de la métrica, lo que nos da el cumplimiento no solo de esta ASR sino que nos brinda un margen amplio para cumplir con otros requerimientos de calidad.

## Punto de sensibilidad identificado
Llegamos a la conclusión que el componente proxy definido en la arquitectura es determinante, ya que permite seleccionar, priorizar y enlazar las capas intermedias de los diferentes componentes, ya que esta capa agenda el uso de los recursos y separa la capa web.


[![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/back_arrow.png)Modelos y vistas diseñadas durante este sprint](Modelos-y-vistas-diseñadas-durante-este-sprint-sp1) / [Video![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/next_arrow.png)](Video-sp1)

 