import taskSelectedTpl from "../../assets/partials/task-selected.hbs";
import { createTaskViewModel } from "./task-model-mapper.js";

let taskDetails;

document.addEventListener("DOMContentLoaded", () => {
    taskDetails = document.getElementById("task-details");
    renderEmptyState();
});

export function renderSelectedTask(task) {
    if (!taskDetails) {return;}

    taskDetails.innerHTML = taskSelectedTpl(createTaskViewModel(task));
}

export function renderEmptyState() {
    if (!taskDetails) {return;}

    taskDetails.innerHTML = `
        <p class="task-details__greetings">Select a task to see details</p>
        <span class="task-details__underline"></span>
    `;
}

