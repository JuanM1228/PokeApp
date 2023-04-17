<p align="center" width="300">
   <img align="center" width="300" src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" />
   <h3 align="center">Hey Heroes 👋! hope you enjoy the project.👨🏻‍💻</h3>
</p>

I decided to make this project about pokemon api because it is one of the series that I liked the most when I was a kid 👦 and what better than to make a test with something that you really enjoy 😍💪.

# 🐥 Pokedex

Project for the visualization of a 100 pokemon catalog with the possibility to show detailed information of each one of them, with pure css based design and good UX.

<br>

# Tools

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

# Libraries used

## react-router-dom:

For navigation in the project using fixed and dynamic routes as it is one of the most popular libraries and has a large community of users.

<p align="center" width="300">
  <img align="center" width="120" src="https://reactrouter.com/_brand/react-router-color-inverted.svg"/>
</p>

## react icons:

For the use of some icons in the application because the icons are easy to integrate and it is compatible with all versions of react.

<p align="center" width="300">
  <img align="center" width="50" src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"/>
</p>

## redux-toolkit:

For the creation of store and reducers, this library is very useful to simplify and optimize the process of projects with redux, to manage the states in the project, in my case the states that I used were the user name and the data of the selected pokemon.

<p align="center" width="300">
   <img align="center" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
</p>

# Uso de SVG:

I used svg for the project icon, header logo and each of the images on each pokemon card, as there is no loss of quality and reduced file size, also they can be altered by css as it happened in the pokemon cards.

# Diseño:

- I decided to make the design with pure css because this way I am not limited in my ability to customize unlike the use of bootstrap or tailwind that although it saves time their designs are very basic and can be found in many web pages or applications.
- I used flex throughout the project for a responsive design as it facilitates the alignment of elements and components and I did not see the need to use another tool such as grid as my layout did not contain much complexity.

<p align="center" width="300">
 <img align="center" width="400" src="images\responsive.gif" />
</p>

- I decided to use relative and absolute positions for the placement of images on pokemon cards to give a better view.
- I choose to make a small amount of variables in terms of colors as this makes it easier to use them in the design and follow the same color palette in the project.

<center>

|   **Variable**   |                                            **Color**                                             |
| :--------------: | :----------------------------------------------------------------------------------------------: |
| --yellow-pokemon |     ![**rgb(204, 181, 33)**](https://via.placeholder.com/10/CCB521?text=+) rgb(204, 181, 33)     |
|   --app-color    |       ![**rgb(36, 36, 36)**](https://via.placeholder.com/10/242424?text=+) rgb(36, 36, 36)       |
|   --font-color   | ![**rgb(204, 181, 33)**](https://via.placeholder.com/10/ffffffcc?text=+) rgb(255, 255, 255, 0.8) |

 </center>

- I chose to use a cursor pointer for the cards where it is possible to interact with the application to improve the user experience.

# Restricciones en login:

I used regex to restrict the user to use only alphabetic characters, also they can not enter the project if they do not enter a name of 3-20 characters, these restrictions were proposed by me but in a real project will depend on the specifications that are given between front-end and back-end, the use of regex is important because the queries are more efficient and faster.

<br>

# LocalStorage

I decided to use the local storage tool because when refreshing the project the selected pokemon or user information were deleted, however by using this tool they will be kept in local storage and thus improve the user experience.

<br>

# Componente Loading

I placed a loading component to improve the user experience while the api returns the information to display, so the user is aware that the information is being requested.

<br>

# Walkthrough of the project

## Header

I decided to add in the header the pokemon logo in svg and a logout button to be able to exit back to the login screen simulating a better user interface.

## Login screen

 <img align= "right" width="400" src="images\app.gif" />

In this screen you can see a welcome message, an input element and a login button, the input element has a placeholder attribute with the legend "please enter your name" to indicate to the users that they need to login, if the name of the user entered contains numerical elements, symbols or only blank spaces it will not be accepted, if this happens the user will be shown a legend with the acceptance characteristics.

## Pokemon List screen

As first observation we can realize that when we have entered in the header a logout button is shown to return to the login screen, at the beginning of the screen we can see the name of the pokedex corresponding to the user name entered, stylized with an 8 bit font from google fonts.

After that we will be able to observe the 100 cards with each one of the pokemon with information of name, type of pokemon, weight and image, which when hovering to the card will grow a percentage giving a better user experience which will take into account that pokemon can get to select.
This screen is stylized in flexbox so it is responsive.

## Pokemon information screen

selecting a pokemon card will send us to another screen where we can see more characteristics of the selected pokemon such as weight, height, type of pokemon, life points, attack points, defense points and speed.

if you want to return to the pokemon list there are two ways to do it:

- clicking on the pokemon logo, since many users are used to click on the logos to return to home.
- clicking on the arrow button placed at the top left of the screen.
  it should be noted that when reloading the page this will not be affected since the info is stored in the local storage.

Another point to observe is that the url is dynamic with respect to the selected pokemon thanks to react router dom.

# Improvement points:

- better animations for page transitions.
- more information in pokemon card selected maybe with some carousel component and graphics for better visualization of information.

# Steps to run project

You need these tools to get started:

- Node js
- Git

You need to clone this repository https://github.com/JuanM1228/PokeApp.git in a directory using a terminal

#### `git clone https://github.com/JuanM1228/PokeApp.git`

After that you need to enter the generated folder

#### `cd PokeApp`

After that you need to download the necessary dependencies for the project

#### `npm install`

finally run the app in the development mode.

#### `npm run dev -- --host`

this command is to run the project in development mode enabling the default port so that any networked device can observe the page.
