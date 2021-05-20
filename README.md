Emprend (Examen 2 vacante front end Neubox)
Aplicación web que permite compartir ideas con los demás. En la aplicacion se permite el Login y Registro de usuarios y se puede consultar las ideas compartidas por los usuarios o registrar nuevas ideas. Tambien cuenta con una landing page de Emprend

Comenzando 🚀

Pre-requisitos 📋
Tener instalada la API brindada en el siguiente repositorio https://github.com/fakereto/emprend-api 
Clonar el repositorio https://github.com/Corcis/emprend.git donde se encuentra la aplicacion o bien haber descargado el ZIP 

Instalación 🔧
Una vez clonado el repositorio ejecutar npm install
En el archivo .env encontrado en la raiz se encuentra la ruta donde esta corriendo la API por default esta como 'http://localhost:8000' pero de ser necesario puede cambiarse a la ruta donde tiene corriendo la API
Una vez instaladas todas las dependencias se debe ejecutar npm run start

Para la vista del landing page en el navegador debe colocar la siguiente url http://localhost:3001/
Para la vista principal (Login) de las ideas en el navegador debe colocar la siguiente url http://localhost:3001/login 
Si lo que quiere hacer es registrar un nuevo suaurio en el navegador debe colocar la siguiente url http://localhost:3001/register 
Una vez iniciada sesion o registrado usuario la aplicacion lo reedireccionará a la lista de ideas

Test 🔧
Para ejecutar el test se debe ejecutar el siguiente comando npm run test:mocha

Construido con 🛠️
La biblioteca de Javascript utilizada para la construccion del proyecto fue React JS

Se utilizaron en conjunto las siguientes dependencias / herramientas

-El administrador de paquetes utlizado fue npm 
-SASS como lenguaje de hoja de estilos
-Bootstrap
-Webpack como herramienta de compilación debido a que Gulp-React esta deprecated 
-Fontawesome
-Popperjs
-Autoprefixer
-Axios
-React-redux
-Sweetalert2
-Babel
-Mocha & Chai para test a la plataforma

Autores ✒️
Diana Rocío Cortés Cisneros
