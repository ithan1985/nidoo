# Seguridad
## Facturación
![](https://raw.githubusercontent.com/MISO-4206/201820-Repo-Grupo-01/master/Imagenes/Sprint4ModeloFuncionalFacturaci%C3%B3n.png?token=ARDc1yZqbu5KP2XCeOLMeCNNybYFbhgdks5cB0gowA%3D%3D)

## Operación
![](https://raw.githubusercontent.com/MISO-4206/201820-Repo-Grupo-01/master/Imagenes/Sprint-3-vista_Operacional.png?token=ARDc1wsp5-WHkYmHC3WeerAe1fylVf_dks5cB0hKwA%3D%3D)

Para garantizar el cumplimiento de los ASR de confidencialidad, se decidió implementar varias tácticas incluidas en nuestra política de seguridad.

1. **Módulo de autenticación**:
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/auteticacion.jpg)
Mediante un módulo de autenticación se controla el acceso individual al sistema, la identificación del usuario se hace con el correo electrónico y la autorización para acceso con la contraseña, estas credenciales permiten verificar el rol asignado por el administrador del sistema.

1. **Ofuscación de código**:
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/ofuscacion.jpg)
Se realiza cambios no destructivos en el código fuente con el fin de que no sea fácil de leer y comprender; evitando facilitar los intentos de ingeniería inversa y desensamblado.

1. **Canal de comunicación seguro**:
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/https.jpg)
Implementando cifrado basado en SSL/TLS para crear un canal seguro, permite evitar ataques de hombre en medio (man-in-the-middle) que buscan obtener acceso a cuentas del sistema o información confidencial. 

1. **Copias de respaldo Código fuente**: 
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/git.jpg)
GitHub para la gestión de código fuente utilizando el sistema de control de versiones Git. El código se almacena de forma pública pero se puede hacer de forma privada creando una cuenta de pago por US$7 mensuales. 

1. **Copias de respaldo Archivos del proyecto y sistema**: 
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/backup.jpg)
Uranium backup es un software versátil para la transferencia y copia de seguridad de los datos, permite hacer copias en google drive de manera muy sencilla. 

1. **Logs de modificaciones a datos**:
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/logsmongodb.jpg)
Activando _auditLog_ en la base de datos MongoDB, permite que el sistema de auditoría escriba cada evento de auditoría en un búfer en memoria de eventos de auditoría, donde los eventos recopilados desde cualquier conexión son únicos y tienen un orden total, si se escribe un evento en el disco, el sistema garantiza que ha escrito todos los eventos anteriores para esa conexión al disco. Si una entrada de evento de auditoría corresponde a una operación que afecta el estado duradero de la base de datos, como una modificación de los datos, MongoDB siempre escribirá el evento de auditoría en el disco antes de escribir en el diario para esa entrada. Es decir, antes de agregar una operación al diario, se escriben todos los eventos de auditoría en la conexión que activó la operación, incluyendo la entrada para la operación.

1. **Parámetros de configuración**:
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/configuracionentorno.jpg)
Mantener diferentes entornos para Desarrollo, Prueba y Producción: En la configuración del proyecto se habilita mediante variables de entorno el ambiente de trabajo y despliegue, en la cual dependiendo de la configuración determina cuales son sus componentes y base de datos, incluyendo si es necesario ofuscación de código.

1. **Política de seguridad**:
![Logo](https://github.com/MISO-4206/201820-Repo-Grupo-01/blob/master/Imagenes/politicadeseguridad.jpg)
- Se debe establecer metodologías para el desarrollo de software, que incluyan la definición de requerimientos de seguridad y las buenas prácticas de desarrollo seguro, con el fin de proporcionar a los desarrolladores una visión clara de lo que se espera.
- Se deben establecer las especificaciones de adquisición o desarrollo de sistemas de información, considerando requerimientos de seguridad de la información.
- Se deben definir qué información sensible puede ser eliminada de sus sistemas y solicitar que estos soporten la eliminación de dicha información, como es el caso de los datos personales o financieros, cuando estos ya no son requeridos.
- En la definición de requerimientos de seguridad de los sistemas de información, teniendo en cuenta aspectos como la estandarización de herramientas de desarrollo, controles de autenticación, controles de acceso y arquitectura de aplicaciones, entre otros.