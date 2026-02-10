import { initEditTaskPrefill } from "../view-task/edit-task-prefill";
import { renderEmptyState } from "./render-task-selected";
import { deleteTaskById } from "./storage";
import { renderTaskList } from "./render-task-list";

document.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('[data-delete-button]');
    const editBtn = e.target.closest('[data-edit-button]');
    const taskEl = e.target.closest('[data-task-id]');

    if (!taskEl) {return;}

    const taskId = taskEl.dataset.taskId;
    
    if (deleteBtn) {
        const confirmDelete = confirm("Delete this task?");
        if (confirmDelete) {
            deleteTaskById(taskId);
            renderEmptyState();
            renderTaskList();
        }
    };

    if (editBtn) {
        initEditTaskPrefill(taskEl);
    };
});