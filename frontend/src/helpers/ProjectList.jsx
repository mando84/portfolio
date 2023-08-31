import Project1 from "../assets/birthdayCountdown.png";
import Project2 from "../assets/cypher.png";
import Project3 from "../assets/ticTacToe.png";
import Project4 from "../assets/favoriteMovies.png";

export const ProjectList = [
  {
    name: "Birthday Countdown",
    image: Project1,
    skills: "React, Javascripts, HTML, CSS, Dayjs",
    description: "This app takes the user's date of birth and gives them a countdown of days, hours, minutes and even seconds till their birthday.",
    url: "https://birthday-countdown-mando-60b8ded22382.herokuapp.com/",
    githubUrl: "https://github.com/mando84/birthdayCountdown",
  },

  {
    name: "Cypher",
    image: Project2,
    skills: "React, Javascript, HTML, CSS, Redux, Express, Mongoose, MongoDB",
    description: "This app allows the user to enter a message and then have it encrypted. The message will be saved on a database along with it's key. The message can then be decrypted in the dashboard.",
    url: "https://cypher-mando-02272c600903.herokuapp.com/",
    githubUrl: "https://github.com/mando84/cypher",
  },

  {
    name: "TicTacToe",
    image: Project3,
    skills: "React, Javascript, HTML, CSS, Redux, Express, Mongoose, MongoDB",
    description: "This app allows the user to create an account and play tic-tac-toe. Their score and other data will be saved and displayed on the dashboard.",
    url: "https://tictactoe-mando-1fd3af6ce4bb.herokuapp.com/",
    githubUrl: "https://github.com/mando84/tictactoeCombined",
  },
  {
    name: "Favorite Movies",
    image: Project4,
    skills: "React, Javsascript, HTML, CSS, API",
    description: "This app displays movies that are searched by the user with the help of an API and then allows the user to save them to a favorites list saved to localStorage.",
    url: "https://favorite-movies-mando-37af1c5bcdd5.herokuapp.com/",
    githubUrl: "https://github.com/mando84/favorite-movies",
  },
];
