export function formatPriority(priority) {
    const map = {
        extreme: "Extreme",
        moderate: "Moderate",
        low: "Low",
    };

    return map[priority] || priority;
}