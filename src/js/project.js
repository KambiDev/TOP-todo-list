export class Project{
    #id;
    
    constructor(title){
        this.#id = crypto.randomUUID();
        this.title = title;
        this.listTask = [];
    }

    get id(){
        return this.#id;
    }

    toJSON(){
        return{
            id: this.#id,
            title: this.title,
            listTask: this.listTask
        }
    }
}