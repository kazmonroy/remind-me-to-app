export default function generatePageLayout() {
  const wrapper = document.querySelector("#wrapper");

  wrapper.appendChild(generateHeader());
  wrapper.appendChild(generateMainContent());
  wrapper.appendChild(generateFooter());
}

// generate each section

function generateHeader() {
  const header = document.createElement("header");
  header.appendChild(makeNav());

  return header;
}

function generateMainContent() {
  const section = document.createElement("section");
  section.classList.add("main-container");

  return section;
}

function generateFooter() {
  const footer = document.createElement("footer");
  const author = document.createElement("p");
  author.textContent = "Made by Kaz";

  footer.appendChild(author);
  return footer;
}

// make content for each section

function makeNav() {
  const nav = document.createElement("nav");

  const home = document.createElement("a");
  home.textContent = "Home";
  home.classList.add("nav-link");

  const projects = document.createElement("a");
  projects.textContent = "Project";
  projects.classList.add("nav-link");

  nav.appendChild(home);
  nav.appendChild(projects);

  return nav;
}
