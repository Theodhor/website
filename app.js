const colors = [
  {
    key: 0,
    back: '#f9f9f9',
    main: '#eae9e9',
    line: '#f45905',
    text: '#f45905'
  },
  {
    key: 1,
    back: '#233714',
    main: '#6b591d',
    line: '#efcfb6',
    text: '#efcfb6'
  },
  {
    key: 2,
    back: '#e4f2f0',
    main: '#99d8d0',
    line: '#70416d',
    text: '#70416d'
  },
  {
    key: 3,
    back: '#5d5d5d',
    main: '#f7f7f7',
    line: '#a0c334',
    text: '#a0c334'
  }
];

const skillsArray = [
  {
    name: 'JavaScript',
    logo: './Assets/Mainskills/js.png'
  },
  {
    name: 'CSS3',
    logo: './Assets/Mainskills/css3.png'
  },
  {
    name: 'HTML5',
    logo: './Assets/Mainskills/html5.png'
  },
  {
    name: 'React',
    logo: './Assets/Mainskills/react.png'
  },
  {
    name: 'Node.js',
    logo: './Assets/Mainskills/node.png'
  },
  {
    name: 'MongoDB',
    logo: './Assets/Mainskills/mongodb.jpeg'
  },
  {
    name: 'Bulma',
    logo: './Assets/Mainskills/bulma.png'
  },
  {
    name: 'Bootstrap',
    logo: './Assets/Mainskills/bootstrap.png'
  },
  {
    name: 'Babel',
    logo: './Assets/Mainskills/babel.png'
  },
  {
    name: 'Bcrypt',
    logo: './Assets/Mainskills/bcrypt.jpeg'
  },
  {
    name: 'Express',
    logo: './Assets/Mainskills/express.png'
  },
  {
    name: 'PostgreSQL',
    logo: './Assets/Mainskills/postgre.png'
  },
  {
    name: 'Python',
    logo: './Assets/Mainskills/python.png'
  },
  {
    name: 'Webpack',
    logo: './Assets/Mainskills/webpack.png'
  },
  {
    name: 'Git',
    logo: './Assets/Mainskills/git.png'
  }
];

const toolsArray = [
  {
    name: 'Atom',
    logo: './Assets/SideSkills/atom.jpeg',
    description: 'Text editor'
  },
  {
    name: 'Insomnia',
    logo: './Assets/SideSkills/insomnia.png',
    description: 'API manager'
  },
  {
    name: 'Trello',
    logo: './Assets/SideSkills/trello.png',
    description: 'Task manager'
  },
  {
    name: 'Cyberduck',
    logo: './Assets/SideSkills/cyberduck.jpeg',
    description: 'A cool duck!'
  }
];

const projectsArray = [
  {
    key: 0,
    title: 'Poker Machine',
    description: 'A simple game made only with HTML5, some CSS3 animations and JavaScript. Click the button below to try the game.',
    skills: [
      {
        name: 'HTML5',
        logo: './Assets/Mainskills/html5.png'
      },
      {
        name: 'CSS3',
        logo: './Assets/Mainskills/css3.png'
      },
      {
        name: 'Javascript',
        logo: './Assets/Mainskills/js.png'
      }
    ],
    images: [
      './Assets/Projects/Poker/poker-1.png',
      './Assets/Projects/Poker/poker-2.png',
      './Assets/Projects/Poker/poker-3.png',
      './Assets/Projects/Poker/poker-4.png',
      './Assets/Projects/Poker/poker-5.png'
    ]
  },
  {
    key: 1,
    title: 'ArtMapper',
    description: 'A full stack mern-app with node.JS and React.JS, using MongoDB as database. Thi is a group project, made with my colleagues James and Aviv.',
    skills: [
      {
        name: 'HTML5',
        logo: './Assets/Mainskills/html5.png'
      },
      {
        name: 'CSS3',
        logo: './Assets/Mainskills/css3.png'
      },
      {
        name: 'Javascript',
        logo: './Assets/Mainskills/js.png'
      },
      {
        name: 'Node.JS',
        logo: './Assets/Mainskills/node.png'
      },
      {
        name: 'React',
        logo: './Assets/Mainskills/react.png'
      },
      {
        name: 'Webpack',
        logo: './Assets/Mainskills/webpack.png'
      },
      {
        name: 'MongoDB',
        logo: './Assets/Mainskills/mongodb.jpeg'
      },
      {
        name: 'BCrypt',
        logo: './Assets/Mainskills/bcrypt.jpeg'
      },
      {
        name: 'Bulma',
        logo: './Assets/Mainskills/bulma.png'
      },
      {
        name: 'Express',
        logo: './Assets/Mainskills/express.png'
      }
    ],
    images: [
      './Assets/Projects/Artmapper/artmapper-1.png',
      './Assets/Projects/Artmapper/artmapper-2.png',
      './Assets/Projects/Artmapper/artmapper-3.png',
      './Assets/Projects/Artmapper/artmapper-4.png',
      './Assets/Projects/Artmapper/artmapper-5.png'
    ]
  },
  {
    key: 2,
    title: 'Fakebook',
    description: 'A full stack flask-app with python and React.JS, using postgreSQL database. Is a social-app, with some Simpsons and Griffin characters already seeded in the database.',
    skills: [
      {
        name: 'HTML5',
        logo: './Assets/Mainskills/html5.png'
      },
      {
        name: 'CSS3',
        logo: './Assets/Mainskills/css3.png'
      },
      {
        name: 'Javascript',
        logo: './Assets/Mainskills/js.png'
      },
      {
        name: 'python',
        logo: './Assets/Mainskills/python.png'
      },
      {
        name: 'React',
        logo: './Assets/Mainskills/react.png'
      },
      {
        name: 'babel',
        logo: './Assets/Mainskills/babel.png'
      },
      {
        name: 'PostgreSQL',
        logo: './Assets/Mainskills/postgre.png'
      },
      {
        name: 'BCrypt',
        logo: './Assets/Mainskills/bcrypt.jpeg'
      },
      {
        name: 'Bulma',
        logo: './Assets/Mainskills/bulma.png'
      },
      {
        name: 'Git',
        logo: './Assets/Mainskills/git.png'
      }
    ],
    images: [
      './Assets/Projects/Fakebook/fakebook-1.png',
      './Assets/Projects/Fakebook/fakebook-2.png',
      './Assets/Projects/Fakebook/fakebook-3.png',
      './Assets/Projects/Fakebook/fakebook-4.png',
      './Assets/Projects/Fakebook/fakebook-5.png'
    ]
  }
];

const carouselKeys = [0,0,0];

const animations =[
  ['animated-back1', 'animated-main1', 'animated-text1'],
  ['animated-back2', 'animated-main2', 'animated-text2']
];
const paletteKeys = [1,2,3];
let paletteKey = 0;

let animationAlternator = true;

document.addEventListener('DOMContentLoaded', function() {
  const imagesToLoad = document.querySelectorAll('.hidden-image');
  const rott = document.documentElement;
  const loadImages = function(){
    let c = 0;
    for(let a=0; a<3; a++){
      for (let b=0; b<5; b++){
        imagesToLoad[c].src = projectsArray[a].images[b];
        c++;
      }
    }
  };

  loadImages();

  const skillsContainer = document.querySelector('.skills');
  function activateSkills(){
    for(let a=0; a<skillsArray.length; a++){
      const flipContainer = document.createElement('div');
      const flip = document.createElement('div');
      const image = document.createElement('img');
      const flipText = document.createElement('div');
      const flipImageContainer = document.createElement('div');
      flipImageContainer.classList.add('flip-image-container');
      flipContainer.classList.add('flip-container');
      flip.classList.add('flip');
      image.classList.add('flip-image');
      flipText.classList.add('flip-text');
      flipText.innerText = skillsArray[a].name;
      image.src = skillsArray[a].logo;
      flipImageContainer.appendChild(image);
      flip.appendChild(flipImageContainer);
      flip.appendChild(flipText);
      flipContainer.appendChild(flip);
      skillsContainer.appendChild(flipContainer);
    }
  }
  activateSkills();

  const tools = document.querySelector('.tools');
  function activateTools(){
    for(let a=0; a<toolsArray.length; a++){
      const toolContainer = document.createElement('div');
      const toolImageContainer = document.createElement('div');
      const toolTextContainer = document.createElement('div');
      const toolImage = document.createElement('img');
      const text = document.createElement('div');
      const description = document.createElement('div');
      toolContainer.classList.add('tool-container');
      toolImageContainer.classList.add('tool-image-container');
      toolTextContainer.classList.add('tool-text-container');
      toolImage.classList.add('tool-image');
      toolImage.src = toolsArray[a].logo;
      description.innerText = toolsArray[a].description;
      text.innerText = toolsArray[a].name;
      toolImageContainer.appendChild(toolImage);
      toolContainer.appendChild(toolImageContainer);
      toolTextContainer.appendChild(text);
      toolTextContainer.appendChild(description);
      toolContainer.appendChild(toolTextContainer);
      tools.appendChild(toolContainer);
    }
  }
  activateTools();
  const body = document.querySelector('body');
  const titles = document.querySelectorAll('.project-title');
  const previousArrows = document.querySelectorAll('.fa-angle-left');
  const nextArrows = document.querySelectorAll('.fa-angle-right');
  const imageContainers = document.querySelectorAll('.project-image');
  const dotsArray = document.querySelectorAll('.dots');
  const descriptions = document.querySelectorAll('.project-description');
  const projectSkills = document.querySelectorAll('.project-skills');
  const sections = document.querySelectorAll('.section');
  const styling = document.querySelector('.styling');

  const palette = document.querySelector('.palette-container');
  const navbar = document.querySelector('.navbar');

  const backSmall = document.querySelectorAll('.back-small');
  const backBig = document.querySelectorAll('.back-big');
  const lineSmall = document.querySelectorAll('.line-small');
  const lineBig = document.querySelectorAll('.line-big');
  const linksToColor = document.querySelectorAll('.link-color');

  const skillsToColor = document.querySelectorAll('.flip-container');
  const projectSkillsToColor = document.querySelectorAll('.project-skill');

  let animationArray = animations[0];
  navbar.classList.add(animationArray[0]);
  body.classList.add(animationArray[0]);
  sections.forEach(section => section.classList.add(animationArray[1]));
  linksToColor.forEach(link => link.classList.add(animationArray[0]));
  skillsToColor.forEach(skill => skill.classList.add(animationArray[0]));
  projectSkillsToColor.forEach(projectSkill => projectSkill.classList.add(animationArray[0]));

  function isVisible(element){
    const elementBounding= element.getBoundingClientRect();
    return elementBounding.top < -225 ? false : true;
  }


  document.addEventListener( 'scroll', () => {
    styling.style.visibility = isVisible(palette) ? 'hidden' : 'visible';
  });

  function stuctureProjects (){
    for(let a=0; a<3; a++){
      titles[a].innerText = projectsArray[a].title;
      descriptions[a].innerText = projectsArray[a].description;
      imageContainers[a].src = projectsArray[a].images[0];

      const createCarouselDots = function(){
        for(let b=0; b<5; b++){
          const dot = document.createElement('div');
          dot.classList.add('dot');
          dotsArray[a].appendChild(dot);
        }
      };

      createCarouselDots();

      const createprojectSkills =  function(){
        for(let b=0; b<projectsArray[a].skills.length; b++){
          const projectSkill = document.createElement('div');
          const flip = document.createElement('div');
          const image = document.createElement('img');
          const flipText = document.createElement('div');
          const flipImageContainer = document.createElement('div');
          flipImageContainer.classList.add('flip-image-container');
          projectSkill.classList.add('project-skill');
          flip.classList.add('flip');
          image.classList.add('flip-image');
          flipText.classList.add('flip-text');
          flipText.innerText = projectsArray[a].skills[b].name;
          image.src = projectsArray[a].skills[b].logo;
          flipImageContainer.appendChild(image);
          flip.appendChild(flipImageContainer);
          flip.appendChild(flipText);
          projectSkill.appendChild(flip);
          skillsContainer.appendChild(projectSkill);
          projectSkills[a].appendChild(projectSkill);
        }
      };
      createprojectSkills();
    }
  }
  stuctureProjects();
  dotsArray[0].children[0].classList.add('full');
  dotsArray[1].children[0].classList.add('full');
  dotsArray[2].children[0].classList.add('full');

  for(let a=0; a<3; a++){
    const dotsToclick = dotsArray[a].children;
    const clearDots = function(){
      for(let i=0; i<5; i++){
        dotsToclick[i].classList.remove('full');
        dotsToclick[carouselKeys[a]].classList.add('full');
      }
    };

    previousArrows[a].addEventListener('click', function(){
      carouselKeys[a]===0 ? carouselKeys[a]=4 : carouselKeys[a]--;
      clearDots();
      imageContainers[a].src = projectsArray[a].images[carouselKeys[a]];
    });
    nextArrows[a].addEventListener('click', function(){
      carouselKeys[a]===4 ? carouselKeys[a]=0 : carouselKeys[a]++;
      clearDots();
      imageContainers[a].src = projectsArray[a].images[carouselKeys[a]];
    });
    for(let b=0; b<5; b++){
      dotsToclick[b].addEventListener('click', function(){
        carouselKeys[a] = b;
        imageContainers[a].src = projectsArray[a].images[carouselKeys[a]];
        clearDots();
      });
    }

  }

  const smallPaletteButtons = styling.children;
  const bigPaletteButtons = palette.children;


  const activatePalettes = function(){
    const changeStyle = function(a){
      navbar.classList.remove(animationArray[0]);
      body.classList.remove(animationArray[0]);
      sections.forEach(section => section.classList.remove(animationArray[1]));
      linksToColor.forEach(link => link.classList.remove(animationArray[0]));
      console.log(body.classList);
      animationAlternator = !animationAlternator ;
      animationAlternator ? animationArray = animations[0] : animationArray = animations [1];
      const paletteMobile = paletteKeys[a];
      paletteKeys[a] = paletteKey;
      bigPaletteButtons[a].style.backgroundColor = colors[paletteKeys[a]].back;
      smallPaletteButtons[a].style.backgroundColor = colors[paletteKeys[a]].back;
      bigPaletteButtons[a].style.color = colors[paletteKeys[a]].text;
      smallPaletteButtons[a].style.color = colors[paletteKeys[a]].text;
      backSmall[a].style.backgroundColor = colors[paletteKeys[a]].main;
      backBig[a].style.backgroundColor = colors[paletteKeys[a]].main;
      lineBig[a].style.backgroundColor = colors[paletteKeys[a]].text;
      lineSmall[a].style.backgroundColor = colors[paletteKeys[a]].text;
      rott.style.setProperty('--back-color1', colors[paletteKey].back);
      rott.style.setProperty('--main-color1', colors[paletteKey].main);
      rott.style.setProperty('--text-color1', colors[paletteKey].text);
      rott.style.setProperty('--line-color1', colors[paletteKey].line);
      paletteKey = paletteMobile;
      rott.style.setProperty('--back-color2', colors[paletteKey].back);
      rott.style.setProperty('--main-color2', colors[paletteKey].main);
      rott.style.setProperty('--text-color2', colors[paletteKey].text);
      rott.style.setProperty('--line-color2', colors[paletteKey].line);
      navbar.classList.add(animationArray[0]);
      body.classList.add(animationArray[0]);
      sections.forEach(section => section.classList.add(animationArray[1]));
      linksToColor.forEach(link => link.classList.add(animationArray[0]));
      skillsToColor.forEach(skill => skill.classList.add(animationArray[0]));
      projectSkillsToColor.forEach(projectSkill => projectSkill.classList.add(animationArray[0]));
    };
    for(let a=0; a<3; a++){
      smallPaletteButtons[a].style.backgroundColor = colors[a+1].back;
      smallPaletteButtons[a].style.color = colors[a+1].text;
      backSmall[a].style.backgroundColor = colors[a+1].main;
      lineSmall[a].style.backgroundColor = colors[a+1].text;
      smallPaletteButtons[a].addEventListener('click', function(){
        changeStyle(a);
      });
      bigPaletteButtons[a].style.backgroundColor = colors[a+1].back;
      bigPaletteButtons[a].style.color = colors[a+1].text;
      backBig[a].style.backgroundColor = colors[a+1].main;
      lineBig[a].style.backgroundColor = colors[a+1].text;
      bigPaletteButtons[a].addEventListener('click', function(){
        changeStyle(a);
      });
      console.log(paletteKeys);
    }
  };
  activatePalettes();



});
