export class Task {
    #id;

    constructor(title, priority, duedate){
        this.#id = crypto.randomUUID(); 
        this.title = title;
        this.priority = priority;
        this.duedate = duedate;
    }

    get id(){
        return this.#id;
    }

    toJSON(){
        return{
            id: this.#id,
            title: this.title,
            priority: this.priority,
            duedate: this.duedate
        };
    }
}