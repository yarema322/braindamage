import { truncate } from "../common/truncate.js";
import { formatPriority } from "../common/format-priority.js";
import { formatStatus } from "../common/format-status.js";
import { renderStatusIcon } from "../common/render-status-icon.js";
import { formatTaskDate } from "../common/format-task-date.js";

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
