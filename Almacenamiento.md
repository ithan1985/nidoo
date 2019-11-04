# Almacenamiento MongoDB
![](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/mongo.png)

Es un sistema de base de datos NoSQL orientado a documentos, en lugar de guardar los datos en tablas como se hace en las base de datos relacionales, MongoDB guarda la estructura de los datos en documentos similares al formato JSON con un esquema dinámico llamadas BSON, haciendo que la integración de los datos más fácil y rápida.

# Transacciones ACID 
Una las características de las transacciones de este sistema de gestión de bases de datos es ACID compliant, es un acrónimo de **A**tomicity, **C**onsistency, **I**solation and **D**urability.

**Atomicidad:** Una operación consiste en una serie de pasos donde todos y cada uno de ellos se ejecutan o ninguno, logrando transacciones son completas.

**Consistencia:** (Integridad). Propiedad que asegura que sólo se empieza aquello que se puede acabar. Donde se ejecutan operaciones que no van a romper las reglas y directrices de Integridad de la base de datos, cualquier transacción irá a la base desde un estado válido a otro también válido, logrando que los datos son consistentes, siempre intactos, exactos sin deformación.

**Aislamiento:** Propiedad que asegura que una operación no puede afectar a otras, donde dos transacciones sobre la misma información son independientes y no generan error, indicando cómo y cuándo los cambios producidos por una operación son visibles para las demás operaciones. 

**Durabilidad:** (Persistencia). Propiedad que asegura que una vez realizada la operación, se persistirá y no se podrá deshacer aunque falle el sistema, logrando que los datos sobrevivan de alguna manera.