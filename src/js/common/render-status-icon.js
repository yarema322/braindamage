export function renderStatusIcon(status) {
    const colorMap = {
        "not-started": "#F21E1E",
        "in-progress": "#1a30f5",
        "low": "#1eff00ff",
    };

    return `
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
        <circle
            cx="7"
            cy="7.5"
            r="6"
            stroke="${colorMap[status] || "#ccc"}"
            stroke-width="2"
        />
        </svg>
    `;
}