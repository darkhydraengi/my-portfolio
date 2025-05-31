// Load header and footer
function loadComponent(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data);
  }
  
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
  
  // Load projects from JSON and display them using project-card template
  function loadProjects() {
    fetch("data/projects.json")
      .then(response => response.json())
      .then(projects => {
        fetch("components/project-card.html")
          .then(response => response.text())
          .then(template => {
            let output = "";
            projects.forEach(project => {
              let card = template
                .replace(/{{image}}/g, project.image)
                .replace(/{{title}}/g, project.title)
                .replace(/{{description}}/g, project.description)
                .replace(/{{link}}/g, project.link);
              output += card;
            });
            document.getElementById("project-cards").innerHTML = output;
          });
      });
  }
  
  loadProjects();