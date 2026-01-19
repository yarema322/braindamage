import { formatTaskDate } from "../common/format-task-date.js";
import taskTpl from "../../assets/partials/task.hbs";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("vital-task-list__container");
    if (!container) return;

    const tasks = getTasksFromStorage();
    const vitalTasks = tasks.filter(task => task.mode === "vital");
    container.innerHTML = vitalTasks
        .map(task => taskTpl(toTemplateModel(task)))
        .join("");
});

function getTasksFromStorage () {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
}

function toTemplateModel(task) {
    return {
        id: task.id,
        taskTitle: truncate(task.title, 20),
        taskDescriptionShort: truncate(task.description, 60),

        priority: task.priority,
        priorityLabel: formatPriority(task.priority),

        status: task.status,
        statusLabel: formatStatus(task.status),
        statusIcon: renderStatusIcon(task.status),
        
        createdAtLabel: formatTaskDate(task.createdAt),

        image: task.image || "",
    };
};

function truncate(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
}

function formatPriority(priority) {
    const map = { extreme: "Extreme", moderate: "Moderate", low: "Low" };
    return map[priority] || priority;
}

function formatStatus(status) {
    const map = { "not-started": "Not Started", "in-progress": "In Progress", low: "Low" };
    return map[status] || status;
}

function renderStatusIcon(status) {
    const colorMap = {
        "not-started": "#F21E1E",
        "in-progress": "#1a30f5",
        low: "#1eff00ff",
    };

    return `
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
        <circle cx="7" cy="7.5" r="6" stroke="${colorMap[status] || "#ccc"}" stroke-width="2"/>
        </svg>
    `;
}