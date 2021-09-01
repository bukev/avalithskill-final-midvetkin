# Sobre el proyecto
Este proyecto fue realizado como proyecto final en marco de la Skill Factory Squads Edition a cago del equipo de Avalith.

# Consigna

## Backend

Deberán crear una API donde el usuario pueda loguearse utilizando

su email y su password, y al ser exitoso deberá devolver un token

que quedará persistido en el Frontend.

Deberán crear un sistema para una empresa dedicada al alquiler de

películas, donde un usuario logueado puede ver el listado de

películas disponibles y agregarla a sus favoritos, y desde su

listado personal de favoritos poder quitar una película de la misma.

Además de ello, los usuarios con rol de administrador pueden crear y

modificar películas. Para lograr esto, deberán diseñar los endpoints

y tablas que consideren necesarios.

Para simplificar la complejidad de servir las carátulas de las películas

al usuario, en su tabla deberán guardar una URL con la dirección de

la imagen que luego será utilizada por el frontend.

  

## Frontend

Utilizar “create react app” para generar la aplicación y React Router

para crear las siguientes rutas:

  

### /auth -> publica

Deberán crear un formulario de Login, y persistir el token.

Los inputs del formulario deberán de estar validados.

  

### /home -> publica

Deberán crear una vista de Home y esta deberá ser la ruta por

principal y por defecto en la cual deberá contar con un Navbar y con

un botón de Login que al presionarlo deberá redirigir a la ruta /auth.

En esta vista deberán mostrar el catálogo de películas obtenidas

desde el backend y en caso de que esté logueado el usuario mostrará

un botón en cada película para agregarla a favoritos.

  

### /favourites -> el usuario debe estar logueado

Deberán mostrar las películas favoritas del usuario y permitir

removerlas de la misma.

  

### /edit-movie -> el usuario debe ser administrador

Deberán crear una vista en donde puedan editar una película a través

de un formulario.

  

### /add-movie -> el usuario debe ser administrador

Deberán crear una vista en donde puedan agregar una película a

través de un formulario.

Los inputs del formulario deberán de estar validados y evitar enviar un

request si algo está incorrecto.


# Setup

### Dependencias
Para correr el proyecto, en primer lugar es necesario instalar en primer lugar las dependencias del servidor: 

    npm install

Y las dependencias del cliente:

    cd client
    npm install


### Archivo de configuración
En el root del proyecto, será necesario crear un archivo de configuración **config.js** con la siguiente estructura:
```js
    const  app  = {
        port,
        host,
        database,
        user,
        password,
    }

    module.exports  =  app
```

### Base de Datos
Dentro de la carpeta ``server/database`` se encuentran tres archivos SQL listos para importar en un gestor de bases de datos, conteniendo todos los datos necesarios para probar el sistema.
