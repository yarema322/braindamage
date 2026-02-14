import { formatTaskDate } from "../common/format-task-date.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";

export function createTaskViewModel(task) {
    return {
        ...task,
        taskTitle: task.title,
        taskDescription: task.description,
        priorityLabel: formatPriority(task.priority),
        statusLabel: formatStatus(task.status),
        createdAtLabel: formatTaskDate(task.createdAt),
    };
}