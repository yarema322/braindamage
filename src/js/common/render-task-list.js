import { truncate } from "./truncate.js";
import { formatPriority } from "./format-priority.js";
import { formatStatus } from "./format-status.js";
import { renderStatusIcon } from "./render-status-icon.js";
import { formatTaskDate } from "./format-task-date.js";

export function toTemplateModel(task) {
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
