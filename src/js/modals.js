import { validateProject, validateTask } from "./formvalidate.js";
import { Task } from "./task.js";
import { Project } from "./project.js";

export const initModals = (onProjectSubmit, onTaskSubmit) => {

    const dialogProject = document.querySelector(".dialog-project");
    const btnAcceptProject = document.querySelector(".btn-accept-project");
    const btnCancelProject = document.querySelector(".btn-cancel-project");

    btnAcceptProject.addEventListener("click", (e) => {
        e.preventDefault();
        
        const inputProjectTitle = document.querySelector("#project-title").value;

        const validation = validateProject(inputProjectTitle);

        if (!validation.isValid){
            alert(validation.error);
            return;
        }

        const newProject = new Project(validation.data);

        onProjectSubmit(newProject);

        document.querySelector("#project-title").value = "";
        
        dialogProject.close();
    });

    btnCancelProject.addEventListener("click", () => dialogProject.close());

    const modalProject = () => {
        dialogProject.showModal();
    };

    const dialogTask = document.querySelector(".dialog-task");
    const btnAcceptTask = document.querySelector(".btn-accept-task");
    const btnCancelTask = document.querySelector(".btn-cancel-task");

    btnAcceptTask.addEventListener("click", (e) => {
        e.preventDefault();
        
        const inputTodoTitle = document.querySelector("#todo-title").value;
        const inputTodoPriority = document.querySelector("#todo-priority").value;
        const inputTodoDueDate = document.querySelector("#todo-duedate").value;

        const validation = validateTask(inputTodoTitle, inputTodoPriority, inputTodoDueDate);

        if (!validation.isValid){
            alert(validation.error);
            return;
        }

        const newTask = new Task(
            validation.data.title, 
            validation.data.priority, 
            validation.data.dueDate
        );

        onTaskSubmit(newTask);

        document.querySelector("#todo-title").value = "";
        document.querySelector("#todo-priority").value = "";
        document.querySelector("#todo-duedate").value = "";

        dialogTask.close();
    });

    btnCancelTask.addEventListener("click", () => dialogTask.close());

    const modalTask = () => {
        dialogTask.showModal();
    };

    return {
        modalProject,
        modalTask
    }
};