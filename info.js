let info = {
  name: "Jose Duarte",
  logo_name: "Jose",
  flat_picture: require("./src/assets/portrait.png"),
  logo_vue: require("./src/assets/logo.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Frontend Developer y soporte IT en Microsoft. Con logica y paciencia podemos hacer grandes cosas &#128517",
  links: {
    linkedin: "https://www.linkedin.com/in/josegduarte96/",
    github: "https://github.com/josegduarte96",
    resume:
      "https://drive.google.com/file/d/1DkIYx31POkRmRk8Kfe5_tbVPjAKVyqUj/view?usp=sharing"
  },
  education: [
    {
      name: "Instituto Tecnologico Del Estado Bolivar",
      place: "Venezuela, Bolivar",
      date: "MAR, 2015 - JUN, 2018",
      degree: "Tecnico Superior Universitario en Informatica",
      description:
        "",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL Server, MySQL",
        "PHP",
        "Soporte IT",
        "Redes",
        "Ubuntu"
      ]
    },
  ],
  experience: [
    {
      name: "All Seasons S.R.L",
      place: "Argentina",
      date: "ABR, 2022 - actualidad",
      position: "Desarrollador Full Stack",
      description:
        "",
      skills: ["Javascript", "VueJs", "Bootstrap", "Sass", "Pinia", "Axios"]
    },
    {
      name: "Megadata Sistemas S.R.L",
      place: "Argentina",
      date: "DIC, 2019 - MAY, 2022",
      position: "Soporte, Desarrollador FullStack",
      description:
        "",
      skills: ["Javascript", "VueJs", "Java SpringBoot", "Tailwind", "Bootstrap", "Vuex", "SQL Server"]
    },
    {
      name: "Unidos Mv S.A",
      place: "Venezuela",
      date: "DIC, 2013 - AGO, 2019",
      position: "Soporte IT, Consultor",
      description:
        "",
      skills: ["Backups SQL", "Server Admin", "Redes", "Gestion WebMails", "Instalaciones", "Hardware", "Software"]
    },
  ],
  skills: [
    {
      title: "Lenguajes",
      info: [
        "Javascript","Java", "TypeScript"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap5","Tailwind", "Sass", "Es6","json"],
      icon: "fa fa-cubes"
    },
    {
      title: "Frameworks",
      info: ["Vue", "React", "SpringBoot", "Quasar", "Vuetify"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Bases De Datos",
      info: ["MySQL", "SQL Server"],
      icon: "fa fa-database"
    },
    {
      title: "Sistemas Operativos & Herramientas",
      info: [ "Ubuntu", "Windows", "MacOs", "Firebase"],
      icon: "fas fa-tools"
    }
  ],
  portfolio: [
    {
      name: "Sneaker Shop",
      pictures: [
        {
          img: require("./src/assets/portfolio/ecommerce/ec3.png")
        },
        {
          img: require("./src/assets/portfolio/ecommerce/ec2.png")
        },
        {
          img: require("./src/assets/portfolio/ecommerce/ec1.png")
        },
        {
          img: require("./src/assets/portfolio/ecommerce/ec3.png")
        }
      ],
      technologies: ["vue", "responsive", "css", "Bootstrap"],
      category: "Web App",
      date: "Ene, 2022",
      github:
        "https://github.com/josegduarte96/ecommerce",
      visit: "https://sneakers-shop-vue.netlify.app/#/",
      description:
        " Desafio front end mentor.  "
    },
    {
      name: "Easy Bank",
      pictures: [
        {
          img: require("./src/assets/portfolio/easybank/easybank1.png")
        },
        {
          img: require("./src/assets/portfolio/easybank/easybank2.png")
        },
        {
          img: require("./src/assets/portfolio/easybank/easybank3.png")
        }
      ],
      technologies: ["vue", "responsive", "css", "Bootstrap"],
      category: "Web App",
      date: "Ene, 2022",
      github:
        "https://github.com/josegduarte96/easybank",
      visit: "https://easybank-joseduarte.netlify.app/",
      description:
        " Desafio front end mentor.  "
    },
    {
      name: "App Maps",
      pictures: [
        {
          img: require("./src/assets/portfolio/appmaps/appmap1.png")
        },
        {
          img: require("./src/assets/portfolio/appmaps/appmap2.png")
        },
        {
          img: require("./src/assets/portfolio/appmaps/appmap3.png")
        }
      ],
      technologies: ["vue", "vuex", "TypeScript", "local storage", "MapBox API", "Bootstrap"],
      category: "Web App",
      date: "Ene, 2022",
      github:
        "https://github.com/josegduarte96/AppMaps",
      visit: "https://appmaps.netlify.app/#/",
      description:
        " Un mapa hecho en typescript con la api de mapBox, tiene un buscador de lugares y recomendacion de ruta. "
    },
    {
      name: "Daybook App",
      pictures: [
        {
          img: require("./src/assets/portfolio/daybook/daybook.jpg")
        },
        {
          img: require("./src/assets/portfolio/daybook/2.jpg")
        }
      ],
      technologies: ["vue", "vuex", "local storage", "auth", "firebase", "vue-router"],
      category: "Web App",
      date: "Ago, 2021",
      github:
        "https://github.com/josegduarte96/daybook",
      visit: "https://daybook-vue-vuex.netlify.app/#/daybook",
      description:
        " Daybook App especie de un diario personal, sirve para guardar notas a la fecha con alguna imagen para recordar cosas "
    },
    {
      name: "The Movies",
      pictures: [
        {
          img: require("./src/assets/portfolio/the-movies/home.png")
        },
        {
          img: require("./src/assets/portfolio/the-movies/register.png")
        },
        {
          img: require("./src/assets/portfolio/the-movies/login.png")
        },
        {
          img: require("./src/assets/portfolio/the-movies/modal.png")
        },
        {
          img: require("./src/assets/portfolio/the-movies/movies.png")
        }
      ],
      technologies: ["vue", "vuex", "local storage", "auth", "xepelin-api", "vue-router", "TMDB Api", "quasar"],
      category: "Web App",
      date: "Feb, 2022",
      github:
        "https://github.com/josegduarte96/the-movies-quasar",
      visit: "https://the-movies-quasar.netlify.app/#/",
      description:
        " The movies App es una plataforma para mirar un listado de algunas peliculas del momento, las mas valoradas y las que estan por estrenarse. Permite guardas tus peliculas favoritas "
    },
    {
      name: "Todo List",
      pictures: [
        {
          img: require("./src/assets/portfolio/todo-list/1.jpg")
        },
        {
          img: require("./src/assets/portfolio/todo-list/2.jpg")
        }
      ],
      technologies: ["JavaScript", "css", "html", "localStorage"],
      category: "Web App",
      date: "Sep 2021",
      github:
      "https://github.com/josegduarte96/todo-list-js",
      visit: "https://josegduarte96.github.io/todo-list-js/",
      description:
        "Lista de tareas en JS!! &#x1F4D1;"
    },
    {
      name: "BlackJack Game",
      pictures: [
        {
          img: require("./src/assets/portfolio/game/1.png")
        },
        {
          img: require("./src/assets/portfolio/game/2.png")
        },
        {
          img: require("./src/assets/portfolio/game/3.png")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript"],
      category: "Web App",
      date: "Sep, 2021",
      github: "https://github.com/josegduarte96/blackjack",
      visit: "https://josegduarte96.github.io/blackjack/",
      description:
        "Autentico juego famoso conocido como BLACKJACK!! o 21"
    },
    {
      name: "Gif Expert App",
      pictures: [
        {
          img: require("./src/assets/portfolio/gifexpert/1.png")
        }
      ],
      technologies: ["React", "JavaSript", "apiGiphy"],
      category: "Web App",
      date: "Sep, 2021",
      github: "https://github.com/josegduarte96/gif-expert-app",
      visit: "https://josegduarte96.github.io/gif-expert-app/",
      description:
        "Pequeña app para buscar los gifs mas divertidos de la plataforma Giphy"
    },
    {
      name: "Calculadora",
      pictures: [
        {
          img: require("./src/assets/portfolio/calculator/1.jpg")
        },
        {
          img: require("./src/assets/portfolio/calculator/2.jpg")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript"],
      category: "Web App",
      date: "Sep, 2021",
      github: "https://github.com/josegduarte96/calculator-js",
      visit: "https://josegduarte96.github.io/calculator-js/",
      description:
        "Una calculadora hecha en JavaScript! &#x1F4DF;"
    },
    {
      name: "PokeCard",
      pictures: [
        {
          img: require("./src/assets/portfolio/pokecard/1.png")
        }
      ],
      technologies: ["JavaScript", "axios", "pokeApi"],
      category: "Web App",
      date: "Sep 2021",
      github:
      "https://github.com/josegduarte96/pokecard",
      visit: "http://pokecard-gray.vercel.app/",
      description:
        "Carta de pokemones, cada vez que se refresca el navegador trae uno nuevo"
    }
  ]
};

export default info;
