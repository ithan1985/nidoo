Para garantizar el cumplimiento de los ASR de latencia y los de escalabilidad, se decidió implementar la táctica de balanceo de carga y el incremento de recurso.

1. **Balanceador**
Implementando un componente balanceador para la atención de peticiones desde la capa de presentación y asignación de nodo en una red local para realizar los cálculos y almacenar la información, segmentando la carga operacional y aplicando escalamiento horizontal. Este componente lo implementación desde las primera etapas del proyecto para tener un mejor control en reparto de las cargas de trabajo fijas así como las transitorias.

1. **Incremento de recursos**
Seleccionando y ajustando los componentes de computo suficientes para el procesamiento de peticiones y datos. Para implementar esta táctica replicamos los nodos de backend que son los responsables de la mayor parte de la carga transaccional en el evento de generar la facturación.