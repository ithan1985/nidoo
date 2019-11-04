## Balanceador
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/Weighted_Round-Robin.png)
Implementando un componente balanceador para la atención de peticiones desde la capa de presentación y asignación de nodo en una red local para realizar los cálculos y almacenar la información, segmentando la carga operacional y aplicando escalamiento horizontal.

Este componente es el punto de sensibilidad de la arquitectura, debido a que realiza la comunicación con el cliente desde internet como componente proxy y las tareas de balanceo entre los componentes de frontEnd y backEnd, permitiendo cumplir con los requisitos de calidad para latencia y escalabilidad.   