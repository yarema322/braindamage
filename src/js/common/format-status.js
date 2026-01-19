export function formatStatus(status) {
    const map = {
        "not-started": "Not Started",
        "in-progress": "In Progress",
        "low": "Low",
    };

    return map[status] || status;
}