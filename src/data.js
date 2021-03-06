const contactData = {
  linkedin: {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raechelo/',
    img: 'https://image.flaticon.com/icons/svg/34/34227.svg',
  },
  github: {
    name: 'GitHub',
    link: 'https://github.com/raechelo',
    img: 'https://cdn.freebiesupply.com/logos/large/2x/github-octocat-logo-black-and-white.png',
  },
  codewars: {
    name: 'Codewars',
    link: 'https://www.codewars.com/users/raechelo',
    img: 'https://cdn0.iconfinder.com/data/icons/a-s-social-set/256/codewars-512.png',
  },
  gmail: {
    name: 'Gmail',
    link: 'mailto:odom.raechel@gmail.com',
    img: 'http://cdn.onlinewebfonts.com/svg/img_165208.png',
  },
  medium: {
    name: 'Medium',
    link: 'https://medium.com/@odom.raechel',
    img: 'https://cdn.worldvectorlogo.com/logos/medium-1.svg'
  }
}

const projectData = {
  pokemonJeopardy: {
    name: 'Pokemon Jeopardy',
    link: 'https://github.com/SiimonStark/gametime_jeopardy_jp_ro',
    imgLink: 'https://i.postimg.cc/2ytDzJjL/screencapture-localhost-8080-2019-04-18-09-49-06.png',
    summary: 'Based on the hit TV show, this game allows a user to choose their starter and compete against other players while they cycle through the questions Professor Oak asks them.',
    stack: ['JQuery', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Chai']
  },
  wheelOfFortune: {
    name: 'Wheel of Mortys',
    link: 'https://github.com/NimSum/wheel-of-mortys',
    imgLink: 'https://i.postimg.cc/R04zVvRH/localhost-8080.png',
    summary: 'A mash-up of two popular TV shows, Wheel of Fortune and Rick and Morty. The user can choose their avatar and play against other users as they compete for the grand prize: an intergalactic gift of some kind.',
    stack: ['JQuery', 'Javascript', 'HTML', 'SCSS', 'Mocha', 'Chai']
  },
  paradePlanner: {
    name: 'Parade Planner',
    link: 'https://github.com/jlavar1/parade-planner',
    imgLink: 'https://i.postimg.cc/WbsW3Sqh/Screen-Shot-2019-04-18-at-9-51-33-AM.png',
    summary: 'The idea behind this app is to help a user find a Mardi Gras parade based on their interests and current travel plans. The user can sort by day, time, and location.',
    stack: ['React', 'Javascript', 'JSX', 'SCSS', 'Jest', 'Enzyme']
  },
  owls: {
    name: 'O.W.L.s',
    link: 'https://github.com/raechelo/OWLs',
    imgLink: 'https://i.postimg.cc/XJNLvzmL/screencapture-localhost-3001-2019-04-16-19-48-35.png',
    summary: 'This is a glossary flash card app using React, Redux, and Router terms. The user can choose their house and guess the answer to the flash card. If they choose correctly , they win points for their house, if not, all other houses are awarded points.',
    stack: ['React', 'Javascript', 'JSX', 'SCSS', 'Jest', 'Enzyme']
  },
  marvelously: {
    name: 'Marvelously',
    link: 'https://github.com/MaxBSilver/marvel-whateverly',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'This is ideally for users who like Marvel movies but aren\'t sure what they want to read or where to start. The app allows users to sort based on their character or movie preferences as well as comic specifics, like writers or editors, and find out if the movie was based on a comic or if the comic has been adapted into a movie. ', 
    stack: ['React', 'Javascript', 'JSX', 'SCSS', 'Jest', 'Enzyme']
  }
}

const logos = [
  {
    name: 'HTML',
    logo: 'https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png'
  },
  {
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg'
  },
  {
    name: 'Sass',
    logo: 'hhttps://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
  },
  {
    name: 'Javascript',
    logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
  },
  {
    name: 'Jquery',
    logo: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png'
  },
  {
    name: 'Jest',
    logo: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png'
  },
  {
    name: 'Enzyme',
    logo: 'https://s.gravatar.com/avatar/a78ef807c3154e902c98d6c3834f0577?size=496&default=retro'
  },
  {
    name: 'Mocha',
    logo: 'https://cdn.freebiesupply.com/logos/large/2x/mocha-1-logo-png-transparent.png'
  },
  {
    name: 'Chai',
    logo: 'https://avatars2.githubusercontent.com/u/1515293?s=400&v=4'
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
  },
  {
    name: 'Redux',
    logo: 'https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png'
  }
]

export default { contactData, projectData, logos }