export function dateFull() {
    const dayElement = document.querySelector(".organizer__day");
    const fullDateElement = document.querySelector(".organizer__full-date");

    const date = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayName = days[date.getDay()];

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    if (dayElement) dayElement.textContent = dayName;
    if (fullDateElement) fullDateElement.textContent = formattedDate;
};