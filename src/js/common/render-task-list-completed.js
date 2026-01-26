import { formatStatus } from "./format-status.js";
import { renderStatusIcon } from "./render-status-icon.js";
import { formatTaskDate } from "./format-task-date.js";
import { truncate } from "./truncate.js";

export function completedTask(task) {
    return {
        id: task.id,
        taskTitle: truncate(task.title, 20),
        taskDescriptionShort: truncate(task.description, 60),

        status: task.status,
        statusLabel: formatStatus(task.status),
        statusIcon: renderStatusIcon(task.status),

        createdAtLabel: formatTaskDate(task.createdAt),

        image: task.image || "",
    }
}