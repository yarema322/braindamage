const dayElement = document.querySelector(".day");

    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });

    dayElement.textContent = `${day} ${month}`;