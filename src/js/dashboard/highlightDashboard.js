if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        const dashboardItem = document.querySelector(
          ".sidebar__item"
        );
        dashboardItem.classList.add("sidebar__item--selected");
      }