import randomchaosbanner from "@/app/images/randomchaosbanner.png"; // Ensure correct path
import bughunterappsnip from "@/app/images/bunghunterappsnip.png";
import twins4softwebsiteimage from "@/app/images/twins4softwebsiteimage.png";
import nextjscoursecertificate from "@/app/images/adamnextjscoursecertificate.png";

const projectList = [
  {
    title: "Random Chaos",
    description: "My second platformer game",
    date: new Date("2025-01-01"), // January 1, 2025
    link: "https://play.google.com/store/apps/details?id=com.Twins4soft.RandomChaos",
    image: randomchaosbanner.src, // Correct way to get the image source
  },
  {
    title: "Issue Tracker",
    description: "My first next js app",
    date: new Date("2025-03-09"), // March 9, 2025
    link: "https://adam-issue-tracker-project-bl1agsbj9-ah07pro1s-projects.vercel.app/dashboard",
    image: bughunterappsnip.src, // Correct way to get the image source
  },
  {
    title: "Twins4soft Website",
    description: "My Company's website",
    date: new Date("2024-07-28"), // July 28, 2024
    link: "https://www.twins4soft.com/",
    image: twins4softwebsiteimage.src, // Correct way to get the image source
  },
  {
    title: "Next Js learning certificate",
    description: "Mosh Next Js Completion Certificate",
    date: new Date("2025-03-01"), // March 1, 2025
    link: "https://codewithmosh.com/p/ultimate-nextjs-series",
    image: nextjscoursecertificate.src, // Correct way to get the image source
  },
];

export default projectList;
