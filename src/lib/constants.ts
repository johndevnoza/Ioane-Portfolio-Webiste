const skillsData = [
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "test", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "5", icon: "test4", id: 5 },
  { name: "6", icon: "test4", id: 6 },
  { name: "7", icon: "test4", id: 7 },
  { name: "8", icon: "test4", id: 8 },
  { name: "9", icon: "test4", id: 9 },
  { name: "10", icon: "test4", id: 10 },
  { name: "10", icon: "test4", id: 11 },
  { name: "10", icon: "test4", id: 12 },
  { name: "10", icon: "test4", id: 13 },
  { name: "10", icon: "test4", id: 14 },
  { name: "10", icon: "test4", id: 15 },
  { name: "10", icon: "test4", id: 16 },
  { name: "10", icon: "test4", id: 17 },
  { name: "10", icon: "test4", id: 18 },
  { name: "10", icon: "test4", id: 19 },
  { name: "10", icon: "test4", id: 20 },
  { name: "10", icon: "test4", id: 21 },
  { name: "10", icon: "test4", id: 22 },
  { name: "10", icon: "test4", id: 23 },
  { name: "10", icon: "test4", id: 24 },
];
const linksData = [
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "test", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "5", icon: "test4", id: 5 },
  { name: "6", icon: "test4", id: 6 },
  { name: "7", icon: "test4", id: 7 },
  { name: "8", icon: "test4", id: 8 },
  { name: "9", icon: "test4", id: 9 },
  { name: "10", icon: "test4", id: 10 },
  { name: "10", icon: "test4", id: 11 },
  { name: "10", icon: "test4", id: 12 },
  { name: "10", icon: "test4", id: 13 },
  { name: "10", icon: "test4", id: 14 },
  { name: "10", icon: "test4", id: 15 },
  { name: "10", icon: "test4", id: 16 },
  { name: "10", icon: "test4", id: 17 },
  { name: "10", icon: "test4", id: 18 },
  { name: "10", icon: "test4", id: 19 },
  { name: "10", icon: "test4", id: 20 },
  { name: "10", icon: "test4", id: 21 },
  { name: "10", icon: "test4", id: 22 },
  { name: "10", icon: "test4", id: 23 },
  { name: "10", icon: "test4", id: 24 },
];
const aboutData = [
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "test", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "5", icon: "test4", id: 5 },
  { name: "6", icon: "test4", id: 6 },
  { name: "7", icon: "test4", id: 7 },
  { name: "8", icon: "test4", id: 8 },
  { name: "9", icon: "test4", id: 9 },
  { name: "10", icon: "test4", id: 10 },
  { name: "10", icon: "test4", id: 11 },
  { name: "10", icon: "test4", id: 12 },
  { name: "10", icon: "test4", id: 13 },
  { name: "10", icon: "test4", id: 14 },
  { name: "10", icon: "test4", id: 15 },
  { name: "10", icon: "test4", id: 16 },
  { name: "10", icon: "test4", id: 17 },
  { name: "10", icon: "test4", id: 18 },
  { name: "10", icon: "test4", id: 19 },
  { name: "10", icon: "test4", id: 20 },
  { name: "10", icon: "test4", id: 21 },
  { name: "10", icon: "test4", id: 22 },
  { name: "10", icon: "test4", id: 23 },
  { name: "10", icon: "test4", id: 24 },
];
const contactData = [
  { name: "html", icon: "test", id: 1 },
  { name: "ccss", icon: "test3", id: 2 },
  { name: "test", icon: "test2", id: 3 },
  { name: "react", icon: "test1", id: 4 },
  { name: "asssssssssss", icon: "test4", id: 5 },
  { name: "6", icon: "test4", id: 6 },
  { name: "7", icon: "test4", id: 7 },
  { name: "8", icon: "test4", id: 8 },
  { name: "9", icon: "test4", id: 9 },
  { name: "10", icon: "test4", id: 10 },
  { name: "10", icon: "test4", id: 11 },
  { name: "10", icon: "test4", id: 12 },
  { name: "10", icon: "test4", id: 13 },
  { name: "10", icon: "test4", id: 14 },
  { name: "10", icon: "test4", id: 15 },
  { name: "10", icon: "test4", id: 16 },
  { name: "10", icon: "test4", id: 17 },
  { name: "10", icon: "test4", id: 18 },
  { name: "10", icon: "test4", id: 19 },
  { name: "10", icon: "test4", id: 20 },
  { name: "10", icon: "test4", id: 21 },
  { name: "10", icon: "test4", id: 22 },
  { name: "10", icon: "test4", id: 23 },
  { name: "10", icon: "test4", id: 24 },
];

const navLinks = [
  { title: "Skills", link: "skills", id: 1, data: skillsData },
  { title: "Links", link: "social-media", id: 2, data: linksData },
  { title: "About", link: "about", id: 3, data: aboutData },
  { title: "Contact", link: "contact", id: 4, data: contactData },
];

export default navLinks;
