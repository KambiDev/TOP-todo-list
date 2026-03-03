import "./css/styles.css";
import { initModals } from "./js/modals.js";
import { ManagerProject } from "./js/managerProject.js";
import { renderProjects, renderTasks } from "./js/render.js";

const myManager = new ManagerProject();

function updateUI() {

    renderProjects(myManager, handleProjectSelection, handleDeleteProject);
    
    renderTasks(myManager, handleDeleteTask);

    const activeProject = myManager.getActiveProject();
    const mainTitle = document.querySelector(".name-project");

    if (activeProject) {
        mainTitle.textContent = activeProject.title;
    } else {
        mainTitle.textContent = "Select or create a project";
    }
}

function handleProjectSelection(projectId) {
    myManager.setActiveProject(projectId);
    updateUI();
}

function handleDeleteProject(projectId) {
    myManager.deleteProject(projectId);
    updateUI();
}

function saveNewProject(projectCreated) {
    myManager.addProject(projectCreated);
    myManager.setActiveProject(projectCreated.id); 
    updateUI();
}

function saveNewTask(taskCreated) {
    myManager.addTaskToActiveProject(taskCreated);
    updateUI();
}

function handleDeleteTask(taskId) {
    myManager.deleteTaskFromActiveProject(taskId);
    updateUI();
}

const myModal = initModals(saveNewProject, saveNewTask);


const btnProject = document.querySelector(".btn-add-project");
const btnTask = document.querySelector(".btn-add-task");

btnProject.addEventListener("click", myModal.modalProject);
btnTask.addEventListener("click", myModal.modalTask);

updateUI();