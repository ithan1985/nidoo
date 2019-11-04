## Facturación
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint_3-modelo_%20funcional_%20facturación.jpg)

## Reserva
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Sprint_3-modelo_funcional_reserva.jpg)

Para garantizar el cumplimiento de los ASR de disponibilidad, se decidió implementar la táctica de balanceo de carga y el incremento de recursos en la capa de persistencia.

1. **Balanceador**
Implementando un componente balanceador para la atención de peticiones desde la capa de presentación, lógica de negocio y almacenamiento, segmentando la carga operacional y aplicando escalamiento horizontal en cada una de las capas. Este componente se implementó desde las primera etapas del proyecto para tener un mejor control en reparto de las cargas de trabajo fijas así como las transitorias.

2. **Incremento de recursos**
Seleccionando y ajustando los componentes de computo suficientes para el procesamiento de peticiones y datos. Para implementar esta táctica replicamos los nodos de frontend, backend y persistencia logrando mayor estabilidad y manteniendo alta disponibilidad en la carga transaccional ACID en el evento de generar la facturación.

3. **Ping/Echo**
Utilidad implementada que permite detectar fallas, en un periodo determinado de tiempo se realiza ping a los distintos componentes del sistema para detectar que un o muchos servidores no estan prestando servicio.

4. **HeartBeat**
Configurado en el motor de bd MongoDB, en un ambiente como el que configuramos en alta disponibilidad donde tenemos 3 nodos de base de datos, uno actúa como principal y dos como secundarios. En la medida que alguno falla la configuración de bd se ajusta apartir de los HeartBeat de cada nodo y se determina quien es el nuevo nodo primario.