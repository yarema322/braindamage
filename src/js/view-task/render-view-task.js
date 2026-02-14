// for listeners
import { getTaskIdFromUrl, deleteTaskById, updateTaskById, getTaskById } from "../common/storage";
import { createTaskViewModel } from "../common/task-model-mapper.js";

import viewTaskTpl from "../../assets/partials/view-task-selected.hbs";

let viewTaskEl;

document.addEventListener("DOMContentLoaded", () => {
    viewTaskEl = document.getElementById("view-task");
    if (!viewTaskEl) {return;}

    const taskId = getTaskIdFromUrl();

    if (taskId) {
        const task = getTaskById(taskId);
        
        if (task) {
            renderViewTask(task);
        } else { 
            window.location.href = "todo.html";
        }

    }
});

function renderViewTask(task) {
    if (!viewTaskEl) {return;}

    viewTaskEl.innerHTML = viewTaskTpl(createTaskViewModel(task));
}


// event listeners 
// delete task 
document.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("[data-delete-task]");
    if (!deleteBtn) {return;}

    const taskId = getTaskIdFromUrl();
    if (!taskId) {return;}

    const confirmed = confirm("Delete this task?");
    if (!confirmed) {return;}

    deleteTaskById(taskId);

    window.location.href = "todo.html";
});

// vital button 
document.addEventListener("click", (e) => {
    const vitalBtn = e.target.closest("[data-vital-task]");
    if (!vitalBtn) {return;}

    const taskId = getTaskIdFromUrl();
    if (!taskId) {return;}

    const confirmVital = confirm("Get this task vital status?");
    if (!confirmVital) {return;}

    updateTaskById(taskId, { mode: "vital", status: "in-progress" });
    window.location.reload();
});