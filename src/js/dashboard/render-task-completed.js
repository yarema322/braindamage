import { truncate } from "../common/truncate.js";
import { renderStatusIcon } from "../common/render-status-icon.js";
import { formatStatus } from "../common/format-status.js";
import { formatTaskDate } from "../common/format-task-date.js";

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