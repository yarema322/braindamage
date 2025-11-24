if (window.location.pathname === "/index.html") {
        const dashboardItem = document.querySelector(
          ".sidebar__item"
        );
        dashboardItem.classList.add("sidebar__item--selected");
      }