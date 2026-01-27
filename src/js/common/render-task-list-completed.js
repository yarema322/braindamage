import { formatStatus } from "./format-status.js";
import { renderStatusIcon } from "./render-status-icon.js";
import { formatTaskDate } from "./format-task-date.js";
import { truncate } from "./truncate.js";

export function completedTask(task) {
    return {
        id: task.id,
        taskTitle: truncate(task.title, 25),
        taskDescriptionShort: truncate(task.description, 50),

        status: task.status,
        statusLabel: formatStatus(task.status),
        statusIcon: renderStatusIcon(task.status),

        completedAt: formatTaskDate(task.completedAt),

        image: task.image || "",
    }
}