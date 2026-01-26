export function formatStatus(status) {
    const map = {
        "not-started": "Not Started",
        "in-progress": "In Progress",
        "completed": "Completed",
    };

    return map[status] || status;
}