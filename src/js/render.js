export const renderProjects = (manager, onProjectSelect, onDeleteProject) => {
    const container = document.querySelector(".container-projects");
    container.innerHTML = ""; 

    manager.listProject.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-item"); 

        const projectTitle = document.createElement("span");
        projectTitle.textContent = project.title;
        projectTitle.classList.add("project-name");
        projectTitle.style.cursor = "pointer"; 

        if (manager.activeProjectId === project.id) {
            projectDiv.classList.add("active-project"); 
        }

        projectTitle.addEventListener("click", () => {
            onProjectSelect(project.id);
        });

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "X"; 
        btnDelete.classList.add("btn-delete-project");

        btnDelete.addEventListener("click", (e) => {
            e.stopPropagation(); 
            onDeleteProject(project.id);
        });

        projectDiv.append(projectTitle, btnDelete);
        container.appendChild(projectDiv);
    });
};


export const renderTasks = (manager, onDeleteTask) => {
    const container = document.querySelector(".container-tasks");
    container.innerHTML = ""; 

    const activeProject = manager.getActiveProject();

    if (!activeProject) {
        container.innerHTML = "<p style='color: #888; text-align: center; margin-top: 2rem;'>Selecciona o crea un proyecto para ver sus tareas.</p>";
        return;
    }

    if (activeProject.listTask.length === 0) {
        container.innerHTML = "<p style='color: #888; text-align: center; margin-top: 2rem;'>No hay tareas aún.</p>";
        return;
    }

    activeProject.listTask.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item");
        
        taskDiv.classList.add(`priority-${task.priority}`); 

        taskDiv.innerHTML = `
            <div class="task-details">
                <h4 class="task-title">${task.title}</h4>
                <div class="task-meta">
                    <span class="task-date">${task.duedate}</span>
                    <span class="task-badge">${task.priority.toUpperCase()}</span>
                </div>
            </div>
        `;

        const btnDeleteTask = document.createElement("button");
        btnDeleteTask.textContent = "Eliminar";
        btnDeleteTask.classList.add("btn-delete-task");

        btnDeleteTask.addEventListener("click", () => {
            onDeleteTask(task.id); 
        });

        taskDiv.appendChild(btnDeleteTask);
        container.appendChild(taskDiv);
    });
};