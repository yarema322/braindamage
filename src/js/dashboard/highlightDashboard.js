if (window.location.pathname === "/src/index.html") {
        const dashboardItem = document.querySelector(
          ".sidebar__item--dashboard"
        );
        dashboardItem.classList.add("sidebar__item--selected");
      }