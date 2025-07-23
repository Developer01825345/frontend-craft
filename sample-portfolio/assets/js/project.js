const modal = document.getElementById("myModal");
const author = { name: "Developer" };

/** Use call(), apply(), and bind() method to fetch title and author name */
function openModal(projecttitle)
{
    console.log(projecttitle);
    
    modal.style.display = "block";
    modal.querySelector("h2").textContent = projecttitle;
    modal.querySelector("label").textContent = "Author: " + this.name;
}

document.querySelector(".project-grid").addEventListener("click", function(e){
    if (e.target.closest(".project-card"))
    {
        const title = e.target.closest(".project-card").dataset.title;
        const cards = [...document.querySelectorAll(".project-card")];
        const index = cards.indexOf(e.target);

        if (index === 0)
        {
            openModal.call(author, title)
        } else if (index === 1)
        {
            openModal.apply(author, [title]);
        } else {
            const boundDetails = openModal.bind(author, title);
            boundDetails();
        }
    }
});
/** End of */

// document.querySelector(".project-grid").addEventListener("click", function(e){
//     if (e.target.closest(".project-card"))
//     {
//         const card = e.target.closest(".project-card");
//         modal.style.display = "block";
//         modal.querySelector("h2").textContent = card.dataset.title;
//     }
// });

document.querySelector(".close").addEventListener("click", function(){
    modal.style.display = "none";
});

window.onclick = function(e){
    if (e.target === modal)
    {
        modal.style.display = "none";
    }
}

function fetchProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const projects = ['Project 1', 'Project 2', 'Project 3'];
      if (projects.length === 0) {
        reject(new Error("No projects available."));
      } else {
        resolve(projects);
      }
    }, 2000);
  });
}

async function loadProjects() {
  console.log("Fetching portfolio projects...");

  try {
    const projects = await fetchProjects();

    if (projects.length === 0) {
      throw new Error("No projects found.");
    }

    projects.forEach((project) => {
      console.log(project);
    });

    console.log("All projects loaded!");
  } catch (error) {
    console.error("Error loading projects:", error.message);
  }
}

loadProjects();