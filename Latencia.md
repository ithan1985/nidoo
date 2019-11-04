# Latencia
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/vista_despliegue_sp1.jpg)

Se implementaron diferentes tácticas como complejidad baja, incremento de recursos, comunicación sincrónica sin intermediarios y un componente proxy, modificando la versión inicial de arquitectura para cumplir con la métrica de generar una factura en menos de 5 segundos.

## Complejidad baja
Creando un formulario para recolectar datos tales como: Placa del vehículo, nombre del cliente, cantidad de minutos y valor por minuto; un algoritmo sencillo para calcular la factura y un modelo de persistencia sencillo para almacenar la información. 

## Incremento de recursos
Seleccionando y ajustando los componentes de computo suficientes para el procesamiento de peticiones y datos.

## Comunicación sincrónica sin intermediarios
Implementando un componente proxy para la atención de peticiones desde internet y asignación de nodo en una red local para realizar los calculo y almacenar la información.

## Experimentación de las decisiones de arquitectura
La prueba se realizó usando el complemento de Blazemeter para Google Chrome que permite previamente grabar los pasos que se realizarán durante el test para la creación de la factura. Posteriormente se realizó el test a la aplicación y se reflejó la creación de una factura con un usuario. 

## Proxy
Implementando un componente intermediario para la atención de peticiones desde internet y asignación de nodo en una red local para realizar los calculo y almacenar la información.

## Resultados del experimento:
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Resultados%20del%20test%20-%20Latencia%20durante%20el%20tiempo%20del%20test.png)
La creación de factura tuvo un pico de 882ms.

![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Resultados%20del%20test%20-%20Promedio%20de%20latencia.png)
La latencia promedio fue de 308.57ms.

El resultado de la experimentación nos brinda una oportunidad amplia para cumplir con otros requerimientos de calidad, ya que esta solución cumple la métrica de generar una factura en menos de 5 segundos.