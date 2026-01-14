import { listenProjects } from "./firebase.js";

let allProjects = [];

// نربط الدالة بالـ window
window.filterProjects = function(type) {
  const filtered = allProjects.filter(p => p.type === type);
  renderProjects(filtered);
};

listenProjects(projects => {
  allProjects = projects;
  renderProjects(allProjects);
});

function renderProjects(list) {
  const box = document.getElementById("projects");
  box.innerHTML = "";

  list.forEach(p => {
    box.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <div class="tag">${p.type}</div>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">Open Project</a>
      </div>
    `;
  });
}