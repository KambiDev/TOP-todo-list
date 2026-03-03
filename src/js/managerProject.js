export class ManagerProject{
    constructor(){
        this.listProject = JSON.parse(localStorage.getItem("listProject")) || [];
        this.activeProjectId = null;
    }

    addProject(project){
        this.listProject.push(project);
        this.toSave();
    }

    deleteProject(id){
        this.listProject = this.listProject.filter(p => p.id !== id);
        if (this.activeProjectId === id) {
            this.activeProjectId = null;
        }
        this.toSave();
    }

    setActiveProject(id){
        this.activeProjectId = id;
    }

    getActiveProject(){
        return this.listProject.find(p => p.id === this.activeProjectId);
    }

    addTaskToActiveProject(task){
        const currentProject = this.getActiveProject();

        if (currentProject){
            currentProject.listTask.push(task);
            this.toSave();
        }else{
            console.error("Error: no hay ningun proyecto seleccionado.");
        }
    }

    deleteTaskFromActiveProject(taskId) {
        const currentProject = this.getActiveProject();
        if (currentProject) {
            currentProject.listTask = currentProject.listTask.filter(task => task.id !== taskId);
            this.toSave(); // 
        }
    }

    toSave(){
        localStorage.setItem("listProject", JSON.stringify(this.listProject));
    }
}