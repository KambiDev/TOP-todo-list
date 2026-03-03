export const validateProject = (title) => {
    
    const cleanTitle = title.trim();
    
    if (!cleanTitle) {
        return { isValid: false, error: "El nombre del proyecto no puede estar vacío." };
    }

    if (cleanTitle.length < 3) {
        return { isValid: false, error: "El nombre debe tener al menos 3 caracteres." };
    }

    return { isValid: true, data: cleanTitle };
};

export const validateTask = (title, priority, dueDate) => {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
        return { isValid: false, error: "La tarea necesita un título." };
    }
    
    if (!priority) {
        return { isValid: false, error: "Debes seleccionar una prioridad." };
    }

    return { 
        isValid: true, 
        data: { title: cleanTitle, priority, dueDate } 
    };
};