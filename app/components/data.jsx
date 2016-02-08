import uuid from 'node-uuid';

const projects = [
    {
      id : uuid.v4(),
      projectName : 'track&forth',
      myRole : 'Software Engineer',
      media : {type: 'youtube', resource: 'https://www.youtube.com/embed/jYJprzXsZU4'},
      projectDescription: 'track&Forth is a google chrome extension that allows you to chat & share music with your friends in the browser. track&forth is available in the chrome store! I am currently working on developing track&forth into a desktop application.',
      projectUrl : 'https://chrome.google.com/webstore/detail/chat-with-friends/lmhocllmapkdbedghiafclffpkgchaim',
      description : 'track&Forth is a google chrome extension that allows you to chat & share music with your friends in the browser. track&forth is available in the chrome store! I am currently working on developing track&forth into a desktop application. track&forth was built on AngularJs, Google Chrome Extension API, Firebase, SoundCloud API, YouTube API and designed with Materialize.',
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
      media : {type: 'gif', resource: '../assets/shakeilGif.gif'},
      projectDescription: 'A custom content management solution for Shakeil Greeley.',
      projectUrl : 'http://www.shakeil.com', 
      description : 'Shakeil Greeyley is a designer, artist, activist, and visual problem solver. Shakeil wanted to house his digital body of work in a digital museum; therefore, I built it. Result: shakeil.com, which is built with AngularJs, Ui-Router, Cloudinary API, NodeJs, ExpressJs and Mongodb/Mongoose. Shakeil designed the visual experience, I implemented the user experience.',
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
      media : {type: 'image', resource: '../assets/MKSLogo.png'},
      projectDescription: 'A desktop application and internal enterprise communication tool, designed to keep students updated with the latest changes in curriculum.',
      projectUrl : 'https://github.com/RichHomies/MakerSquareApp',
      description : 'MakerSquare Lead Instructor, Alex Jeng, challenged me to be build a communication tool for Instructors. Result: MakerSquare Desktop Application. Instructors use this tool to broadcast, in Real-Time, to students: the latest changes to the curriculum, curriculum/logistics-related announcements, and learning resources. This application was built with Electron, React, Flux, GitHub oAuth, Socket.IO, NodeJs, ExpressJs and Mongodb.',
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
      media : {type: 'gif', resource: '../assets/jammCityGif.gif'},
      projectDescription: 'Allows you to make Spotify playlists from bands playing in your area or any venue in the world.',
      projectUrl : 'http://www.jamm-city.com',
      description : 'Jamm-City makes it fun and exciting to explore new music. You can check out artists you have not heard of that are touring in your city. Jamm-City also allows you to create playlists from artists playing tonight. Jamm-City was built with AngularJs, NodeJs, ExpressJs, EchoNest API, SongKick API, Spotify API and HTML5 API.',
      githubURL : 'https://github.com/SaintEmbers/Jam-City',
      collaborators : [{role : 'Software Engineer', name : 'Jason Collins'}, {role : 'Lead Designer', name : 'Jackie Wung'}] ,
      year : 2015,
      next : null,
      prev : null
    },
    {
      id : uuid.v4(),
      projectName : 'Scrapin[dot]it',
      myRole : 'Software Engineer',
      media : {type: 'gif', resource: '../assets/scrapinItGif.gif'},
      projectDescription: 'Receive notifications when a change occurs on the web.',
      projectUrl : 'http://www.scrapin.it',
      description : 'Scrapin.it is a simple web monitoring platform. Scrapin.it monitors for changes in websites over time. When a change occurs, you will receive an email notification. Scrapinit was built on AngularJs, NodeJs, ExpressJs, Mongodb, Tesseract & PhantomJs.',
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