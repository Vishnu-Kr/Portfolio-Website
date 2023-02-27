/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishnu Kumar",
  logo: require("./assets/images/vishnu.jpeg"),
  title: "Hi all, I'm Vishnu",
  subTitle: emoji(
    "A passionate Robotics Software Developer 🚀 having an experience of building software for Manipulators and Mobile Robots with Robot Operating System(ROS) / C++ / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ohz9DrvJ1OGYTdaJ32EIADaim5_eG_AU/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vishnu-Kr",
  linkedin: "https://www.linkedin.com/in/vishnu-kumar-227a03220",
  gmail: "vishnu.kumardp2002@gmail.com",
  // gitlab: "http",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ROBOTICIST WHO WANTS TO EXPLORE EVERY ROBOTICS TECH ",
  skills: [
    emoji(
      "⚡ Develop Control System for Robots"
    ),
    emoji("⚡ Interactive GUI for controlling robots"),
    emoji(
      "⚡ Integration of different Sensors to provide robots with the ability to perceive and interpret their environment effectively  "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "ROS",
      fontAwesomeClassname: "fab fa-ros"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Design, and Manufacturing, Kancheepuram",
      logo: require("./assets/images/iiitdmLogo.png"),
      subHeader: "Bachelor of Technology in Smart Manufacturing",
      duration: "December 2020 - 2024",
      desc: "Coursework:",
      descBullets: [
        "Embedded System, Cryptography and Network Security, IoT, Cloud Computing, Data Science, Robotics & Automation",
      ]
    },
    {
      schoolName: "Shiv Jyoti Sr Sec School, Kota",
      logo: require("./assets/images/shivjyotiLogo.jpeg"),
      subHeader: "Higher Secondary in Science",
      duration: "May 2017 - April 2019",
      desc: "Percentage- 80"
    },
    {
      schoolName: "Manisha International School, Durgapur",
      logo: require("./assets/images/misLogo.jpeg"),
      subHeader: "10th",
      duration: "May 2014 - March 2017",
      desc: "CGPA 10.0"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ROS", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "C++",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Team Co-lead",
      company: "Mars Research Station",
      companylogo: require("./assets/images/marsLogo.png"),
      date: "May 2022 – Feb 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Implemented Sensor Fusion, Odometry Optimization and techniques to map the environment, avoid obstacles and plan a path, leading to autonomous navigation of a UGV.",
        "Currently involved in the development of software for an Autonomous Unmanned Ground Vehicle (UGV) equipped with a robotic manipulator, with the aim of participating in competitions under the Rover Challenge Series held internationally."
      ]
    },
    {
      role: "Robotics Software Engineer",
      company: "Mars Research Station",
      companylogo: require("./assets/images/marsLogo.png"),
      date: "August 2021 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Implemented Sensor Fusion, Odometry Optimization and techniques to map the environment, avoid obstacles and plan a path, leading to autonomous navigation of a UGV.",
        "Currently involved in the development of software for an Autonomous Unmanned Ground Vehicle (UGV) equipped with a robotic manipulator, with the aim of participating in competitions under the Rover Challenge Series held internationally."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects and Works",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ercLogo.png"),
      projectName: "European Rover Challenge 2022 - Remote Formula, Team SHUNYA",
      projectDesc: "Developed Navigation Stack for Leo Rover using ROS. Worked on Sensor Fusion",
      footerLink: [
        {
          name: "Website",
          url: "https://roverchallenge.eu/en/teams/shunya/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arm.jpeg"),
      projectName: "5 DoF Robotic Arm",
      projectDesc: "A 5 DoF manipulator capable of doing pick and place tasks using self-made GUI using PyQt. Built the Control system to control 5 different actuators to perform the task",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Vishnu-Kr/Pick-Place-Robotic-Arm"
        }
      ]
    },
    {
      image: require("./assets/images/bot.png"),
      projectName: "MaRSBot 4",
      projectDesc: "Two wheeled differential drive bot capable of doing semi-autonomous. ",
      footerLink: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/watch?v=OnQALmwZGh4"
        }
      ]
    },
    {
      image: require("./assets/images/leo.jpeg"),
      projectName: "Localization and Mapping",
      projectDesc: "Robot_localization package used for localization along with RTABMapping using ZED 2i",
      footerLink: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/watch?v=4AaZlb4nLxw"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ERC Remote Finalist",
      subtitle:
        "Ranked 2nd worldwide in Qualification A round ",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "European Rover Challenge",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OP22OdUgyMPw4LVv8jHAeFRlSj0Z5ERl/view"
        }
      //   {
      //     name: "Award Letter",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
      //   },
        //  {
        //   name: "Appreciation Letter",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
         ]
    }
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7033940383",
  email_address: "vishnu.kumardgp2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
