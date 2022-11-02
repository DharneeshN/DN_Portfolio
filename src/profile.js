// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 900,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Dharneesh",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
  "A thriving software engineer who has an extensive experience in the design, analysis and testing of a web application, an enhanced understanding of the architecture and frameworks and an adulthood of writing easily maintainable and understandable code.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    faClass: "fab fa-css3",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "ReactJS",
    faClass: "fab fa-react",
  },
  {
    name: "Spring Core",
    svg: "M 26.19 1.7 A 14.75 13.275 90 0 1 24.66 4.7 A 16.05 14.445 90 1 0 4.5 27.7 L 5.04 28.2 A 16.05 14.445 90 0 0 28.71 17.1 C 29.115 13 28.035 7.85 26.19 1.7 Z M 6.525 27.8 A 1.35 1.215 90 1 1 6.345 25.85 A 1.35 1.215 90 0 1 6.525 27.8 Z M 26.145 22.95 C 22.545 28.25 14.94 26.45 10.08 26.75 C 10.08 26.75 9.225 26.8 8.325 26.95 C 8.325 26.95 8.685 26.8 9.09 26.6 C 12.51 25.3 14.13 25.05 16.2 23.85 C 20.115 21.65 24.03 16.8 24.84 11.75 C 23.31 16.6 18.81 20.75 14.67 22.45 C 11.835 23.6 6.75 24.75 6.75 24.75 L 6.57 24.6 C 3.06 22.75 2.97 14.4 9.27 11.7 C 12.06 10.5 14.67 11.15 17.685 10.35 C 20.88 9.5 24.57 6.85 26.055 3.4 C 27.72 8.95 29.745 17.6 26.145 23 Z",
  },
  {
    name: "Rest API",
    faClass: "fas fa-cogs",
  },
  {
    name: "Docker",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-docker",
  }
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Expense Tracker App",
    skills: ["ReactJS, Redux, Material UI, Formik"],
    // url: "https://github.com/gkkrish123",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project2",
    name: "ND Portfolio",
    skills: ["ReactJS, Google sheets API, TS Particles"],
    // url: "https://github.com/gkkrish123",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "Fee Management System",
    skills: ["Java, SpringBoot, AngularJS, MySQL"],
    // url: "https://github.com/gkkrish123",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Interests";
const miscellaneous = [
  // {
  //   // Add image in './styles/images.css' in #misc1
  //   id: "misc1",
  //   name: "Programming",
  //   // url: "https://github.com/gkkrish123",
  // },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Technology",
    // url: "https://github.com/gkkrish123",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Automobile",
    // url: "https://github.com/gkkrish123",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc4  ",
    name: "Stock Market",
    // url: "https://github.com/gkkrish123",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const formSheet = "https://v1.nocodeapi.com/dharneesh/google_sheets/NPzjDUzLlJvTHvPI";
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project, or just say hi, I would love to hear from you. You can submit the form or reach out through the below platforms :)",
  copyright: "Dharneesh N",
  // contactUrl: "https://formspree.io/f/moqbnnlg",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/DharneeshN",
  instagram: "https://www.instagram.com/dharneesh_333/",
  linkedin: "https://www.linkedin.com/in/dharneesh-n-202824154/",
  resume: "https://drive.google.com/file/d/1ha_hHqUp2jvUb3CtB1ltgOvHmGbbHuJs/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  formSheet,
};
