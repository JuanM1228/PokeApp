<p align="center" width="300">
   <img align="center" width="300" src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" />
   <h3 align="center">¡Que tal Heroes 👋! espero les agrade👨🏻‍💻</h3>
</p>

Decidi realizar este proyecto con respecto a la api de pokemon ya que es uno de las series que mas me gustaban cuando era pequeño 👦 y que mas que realizar una prueba con algo que en verdad disfrutas 😍💪

# 🐥 Pokedex

Proyecto para la visualización de catálogo de 100 pokemons con la posibilidad de mostrar información detallada de cada uno de ellos, con diseño basado en css puro y buena experiencia de usuario.

<br>

# Tecnologias utilizadas

<br>
<br>

<p align="center" width="300">
<img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
<img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
   <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
   <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
   <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
      <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
      <img align="center" width="80" src="https://vitejs.dev/logo.svg" />
</p>

<br>
<br>

# Librerias utilizadas

## react-router-dom:

Para la navegación en el proyecto utilizando rutas fijas y dinámicas ya que es una de las librerías mas populares y tiene una gran comunidad de usuarios.

<p align="center" width="300">
  <img align="center" width="120" src="https://reactrouter.com/_brand/react-router-color-inverted.svg"/>
</p>

## react icons:

Para el uso de algunos iconos en la aplicación ya que los iconos son facil de integrar y es compatible con todas las versiones de react.

<p align="center" width="300">
  <img align="center" width="50" src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"/>
</p>

## redux-toolkit:

Para la creación de store and reducers, esta librería es muy util para simplificar y optimizar el proceso de proyectos con redux.

-redux: para gestionar los estados en el proyecto, en mi caso los estados que utilice fueron el nombre de usuario y los datos del pokemon seleccionado

<p align="center" width="300">
   <img align="center" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
</p>

# Uso de SVG:

utilice svg para el icono del proyecto, logo en header y cada una de las imagenes en cada tarjeta pokemon, ya que no existe perdida de calidad y de tamaño de archivo reducido, además pueden ser alterados por medio ded css como sucedio en las tarjetas que al hacer hover aumentan su tamaño.

# Diseño:

- Decidí realizar el diseño con css puro ya que así no tengo limitada mi capacidad de personalización a diferencia del uso de bootstrap o tailwind que aunque ahorra tiempo sus diseños son muy básicos y pueden ser encontrados en muchas páginas web o aplicaciones.
- Use en todo el proyecto flex para un diseño responsivo ya que me facilita la alineación de elementos y componentes y no vi necesario utilizar otra herramienta como grid ya que no contenía mi layout mucha complejidad

<p align="center" width="300">
 <img align="center" width="400" src="images\responsive.gif" />
</p>

- Tome como desición el uso de posiciones relativas y absolutas para la colocación de imagenes en tarjetas de pokemon para dar una mejor vista
- Opte por realizar una pequeña cantidad de variables en cuestión de colores ya que esto facilita utilizarlos en el diseño y seguir una misma paleta de colores en el proyecto

<center>

|   **Variable**   |                                            **Color**                                             |
| :--------------: | :----------------------------------------------------------------------------------------------: |
| --yellow-pokemon |     ![**rgb(204, 181, 33)**](https://via.placeholder.com/10/CCB521?text=+) rgb(204, 181, 33)     |
|   --app-color    |       ![**rgb(36, 36, 36)**](https://via.placeholder.com/10/242424?text=+) rgb(36, 36, 36)       |
|   --font-color   | ![**rgb(204, 181, 33)**](https://via.placeholder.com/10/ffffffcc?text=+) rgb(255, 255, 255, 0.8) |

 </center>

- opte por usar un cursor pointer para las tarjetas donde es posible realizar una interación con la aplicación mejorando la experencia de usuario

# Restricciones en login:

Utilice regex para restringir al usuario solo el uso de caracteres alfabeticos, de igual manera no pueden ingresar al proyecto si no ingresan un nombre de 3-20 caracteres, estas restricciones las propuse yo pero en un proyecto real dependerá de las especificaciones que se den entre front-end y back-end

<br>

# LocalStorage

Decidi utilizar la herramienta de local storage ya que al refrescar el proyecto la información de pokemon seleccionado o usuario eran eliminadas, sin embargo al usar esta herramienta se mantendran en almacenamiento local y así mejorar la experiencia de usuario.

<br>

# Componente Loading

Ya que hice el requerimiento a la API de 100 pokemons y se consultan imagenes, coloqué un componente de carga para mejorar la experiencia de usuario y así este tenga en cuenta que la información esta siendo requerida.

<br>

# Walkthrough of the project

## Header

decidi agregar en el header el logo de pokemon en svg ademas de un botón de logout para poder salir de regreso a la pantalla de login simulando una mejor interfaz de usuario.

## Primer pantalla Login

 <img align= "right" width="400" src="images\app.gif" />

En esta pantalla se puede observar un mensaje de bienvenida, un elemento input y un botón login, el elemento input tiene un atributo placeholder con la leyenda "please enter your name" para indicar al usuario que necesita ingresar, si el nombre del usuario ingresado contiene elementos numericos, simbolos o sólo espacios en blanco no será aceptado, si esto sucede se mostrará al usuario una leyenda con las caracteristicas de aceptación.

## Segunda pantalla cartas con todos los pokemon requeridos

como primer observación podemos darnos cuenta que al haber ingresado en el header se activo un botón de logout para así poder salir a login de nuevo, al inicio de la pantalla podemos observar el nombre del pokedex correspondiente al nombre de usuario ingresado, estilizado con un tipo de letra 8bit proveniente de google fonts

posteriormente podremos observar las 100 tarjetas con cada uno de los pokemon con información de
nombre, tipo de pokemon, peso e imagen, la cual al realizar un hover a la tarjeta crecerá un porcentaje dando una mejor experiencia de usuario el cual tendrá en cuenta que pokemon puede llegar a seleccionar.
Esta pantalla esta estilizada en flexbox por lo que es responsiva.

## Tercer pantalla tarjeta de pokemon seleccionado

al seleccionar una tarjeta de pokemon nos mandará a otra pantalla donde se puede observar mayores caracteristicas del pokemon seleccionado como peso, altura, tipo de pokemon, puntos de vida, puntos de ataque, puntos de defensa y velocidad.
si se desea regresar a la lista de pokemons existen dos formas de hacerlo:
-realizando click a logo pokemon ya que muchos usuarios estan acostumbrados a que al realizar click en los logos regresan a home
-realizando click a boton flecha colocado en la parte superior izquierda de la pantalla.
cabe destacar que al realizar reload a la pagina esta no se verá afectada ya que la info esta almacenada en el local storage

# puntos de mejora:

- ingreso de mejores animaciones para la transición de paginas.
- ingreso de mas información a tarjeta de pokemon seleccionado tal vez con algun componente tipo carrusel y gráficos para mejor visualización de información.

# Steps to run project

Necesitas estas estas herramientas para comenzar:

- Node js
- Git

You need to clone this repository https://github.com/JuanM1228/PokeApp.git in a directory using a terminal

#### `git clone https://github.com/JuanM1228/PokeApp.git`

despues de ello necesitas ingresar a la carpeta generada

#### `cd PokeApp`

Posteriormente deberás descargar las dependencias necesarias para el proyecto

#### `npm install`

finally runs the app in the development mode.

#### `npm run dev -- --host`

este comando es para correr el proyecto en modo desarrollo habilitando el puerto por default para que cualquier en red pueda observar el proyecto
