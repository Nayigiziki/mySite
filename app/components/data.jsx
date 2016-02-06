import uuid from 'node-uuid';

const projects = [
    {
      id : uuid.v4(),
      projectName : 'track&forth',
      myRole : 'Software Engineer',
      images : [],
      projectDescription: 'track&Forth allows you to share music with your friends very easily in the browser. Currently available in the chrome store! track&Forth allows you to share music with your friends very easily in the browser. ',
      projectUrl : 'https://chrome.google.com/webstore/detail/chat-with-friends/lmhocllmapkdbedghiafclffpkgchaim',
      description : 'track&Forth allows you to share music with your friends very easily in the browser. Currently available in the chrome store!track&Forth allows you to share music with your friends very easily in the browser. Currently available in the chrome store!track&Forth allows you to share music with your friends very easily in the browser. Currently available in the chrome store!track&Forth allows you to share music with your friends very easily in the browser. Currently available in the chrome store!',
      githubURL : 'https://github.com/RichHomies/trackAndForth',
      collaborators : [{role : 'Software Engineer', name : 'Zach Lee'}, {role : 'Graphic Designer', name : 'Shakeil Greeley'}] ,
      year : 2015,
      next : null,
      prev : null
    },
    {
      id : uuid.v4(),
      projectName : 'shakeil[dot]com',
      myRole : 'Software Engineer',
      images : [],
      projectDescription: 'A customized content management site',
      projectUrl : 'http://www.shakeil.com',
      description : 'Graphic designer, Shakeil Greeyley, wanted to design his own content management site. So he did, and I was honored to convert his vision into reality.',
      githubURL : 'https://github.com/Nayigiziki/ShakCMS',
      collaborators : [{role : 'Graphic Designer', name : 'Shakeil Greeley'}] ,
      year : 2015,
      next : null,
      prev : null
    },
    {
      id : uuid.v4(),
      projectName : 'MakerSquare Application',
      myRole : 'Software Engineer',
      images : [],
      projectDescription: '',
      projectUrl : 'https://github.com/RichHomies/MakerSquareApp',
      description : '',
      githubURL : 'https://github.com/RichHomies/MakerSquareApp',
      collaborators : [{role : 'Software Engineer', name : 'Zach Lee'}] ,
      year : 2015,
      next : null,
      prev : null
    },
    {
      id : uuid.v4(),
      projectName : 'Jamm-City',
      myRole : 'Software Engineer',
      images : [],
      projectDescription: '',
      projectUrl : 'http://www.jamm-city.com',
      description : '',
      githubURL : 'https://github.com/SaintEmbers/Jam-City',
      collaborators : [{role : 'Software Engineer', name : 'Jason Collins'}] ,
      year : 2015,
      next : null,
      prev : null
    },
    {
      id : uuid.v4(),
      projectName : 'Scrapin[dot]it',
      myRole : 'Software Engineer',
      images : [],
      projectDescription: 'track&Forth allows you to share music with your friends very easily in the browser. Currently available in the chrome store! track&Forth allows you to share music with your friends very easily in the browser. ',
      projectUrl : 'http://www.scrapin.it',
      description : '',
      githubURL : 'https://github.com/TheBlankArrays/Scrapinit',
      collaborators : [{role : 'Software Engineer', name : 'Antonio Pol'}, {role : 'Software Engineer', name : 'Chris Grovers'}, {role : 'Software Engineer', name : 'Dominika Bienkowska'}, {role : 'Software Engineer', name : 'John Murphy'}] ,
      year : 2015,
      next : null,
      prev : null
    }
  ];

  for(let i = 0; i < projects.length; i++){
    projects[i].prev = i === 0 ? projects.length - 1 : i - 1;
    projects[i].next = i === projects.length - 1 ? 0 : i + 1;
  }

export default function() {
  return {projects:projects};
}